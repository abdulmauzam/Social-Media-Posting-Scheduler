<?php 
include './db.php';
require_once 'vendor/autoload.php';
use GuzzleHttp\Client;


$config = [
    'host' => 'localhost',
    'name' => 'facebook_posts',
    'username' => 'root',
    'password' => '',
];

$db = new \Muz\Database();
$db->connect($config);

header('Content-Type: application/json');

if(isset($_POST['action']) && $_POST['user'] === "fbadmin" && $_POST['pass'] === "myfb"){
    if($_POST['action'] == "createSocialPost"){
        add_social_post();
    }else if($_POST['action'] == "postToSocial"){
        create_post_on_social();
    }else{
     echo access_denied();
     exit;
    }
}else{
    echo access_denied();
    exit;
}


function create_post_on_social(){
    global $db;
    $post = $db->table('posts')->select(
        ['condition' => 'WHERE DATE(post_date) = CURDATE() AND posted = 0',]
    )->first();

    $accounts = $db->query('SELECT * FROM linkedin_auth')->get();

    if(count($accounts) > 0 && !empty($post)){
        foreach($accounts as $acc){
         post_on_linkedin($post, $acc);   
        }
    
     $db->table('posts')->update(
        ['posted' => 1],
        'id = '.$post->id.''
     );
    }else{
        echo json_encode(array("response" => "all post(s) have been published.", "status"  => 200));
        exit();
    }


    //
}




function access_denied(){
  return json_encode(array("error" => "access denied please check credentials or api request params", 'status' => 403));
}



function add_social_post(){
    global $db;

    $query = $db->table('posts')->insert([
            'post_title' => $_POST['title'],
            'post_content' => $_POST['post_content'],
            'image_url' => $_POST['image_url'],
            'post_date' => $_POST['post_date']
        ]);
    if($query["affected_row"]){
      echo json_encode(array("response" => "success", "status" => 200));
      exit();
    }else{
      echo json_encode(array("status" => "error", "status" => 500));
      exit();
    }
}



function post_on_linkedin($post, $auth){
 
 $link = $post->image_url;
 $access_token = $auth->auth;
 $linkedin_id = $auth->linked_acc_id;
 $body = new \stdClass();
 $body->content = new \stdClass();
 $body->content->contentEntities[0] = new \stdClass();
 $body->text = new \stdClass();

 $body->content->contentEntities[0] = new \stdClass();
 $body->text = new \stdClass();
 $body->content->contentEntities[0]->thumbnails[0] = new \stdClass();
 $body->content->contentEntities[0]->entityLocation = $link;
 $body->content->contentEntities[0]->thumbnails[0]->resolvedUrl = $post->image_url;
 $body->content->title = $post->post_title;
 $body->owner = 'urn:li:person:'.$linkedin_id;
 $body->text->text = $post->post_content;
 $body_json = json_encode($body, true);
 try {
    $client = new Client(['base_uri' => 'https://api.linkedin.com']);
    $response = $client->request('POST', '/v2/shares', [
        'headers' => [
            "Authorization" => "Bearer " . $access_token,
            "Content-Type"  => "application/json",
            "x-li-format"   => "json"
        ],
        'body' => $body_json,
    ]);
  
    if ($response->getStatusCode() !== 201) {
        echo 'Error: '. $response->getLastBody()->errors[0]->message;
    } 
    echo 'Post is shared on LinkedIn successfully.';
  } catch(Exception $e) {
    echo $e->getMessage(). ' for link '. $link;
  }

}


?>