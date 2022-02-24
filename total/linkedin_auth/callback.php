<?php
require_once 'db.php';
require_once 'config.php';
require_once 'vendor/autoload.php';
use GuzzleHttp\Client;

header('Content-Type: application/json');

$config = [
    'host' => 'localhost',
    'name' => 'facebook_posts',
    'username' => 'root',
    'password' => '',
];

$db = new \Muz\Database();
$db->connect($config);
  
try {
    $client = new Client(['base_uri' => 'https://www.linkedin.com']);
    $response = $client->request('POST', '/oauth/v2/accessToken', [
        'form_params' => [
                "grant_type" => "authorization_code",
                "code" => $_GET['code'],
                "redirect_uri" => REDIRECT_URL,
                "client_id" => CLIENT_ID,
                "client_secret" => CLIENT_SECRET,
        ],
    ]);
    $data = json_decode($response->getBody()->getContents(), true);
    $access_token = $data['access_token']; // store this token somewhere
    try {
        $client = new Client(['base_uri' => 'https://api.linkedin.com']);
        $response = $client->request('GET', '/v2/me', [
            'headers' => [
            "Authorization" => "Bearer " . $access_token,
            ],
        ]);
        $data = json_decode($response->getBody()->getContents(), true);
        $linkedin_profile_id = $data['id']; // store this id somewhere
        save_auth($access_token, $linkedin_profile_id);

    } catch(Exception $e) {
        echo $e->getMessage();
    }
} catch(Exception $e) {
    echo $e->getMessage();
}




function save_auth($auth, $profile_id){
    global $db;

    $query = $db->table('linkedin_auth')->insert([
            'auth' => $auth,
            'linked_acc_id' => $profile_id
        ]);
    if($query["affected_row"]){
      echo json_encode(array("response" => "success", "status" => 200));
      exit();
    }else{
      echo json_encode(array("status" => "error", "status" => 500));
      exit();
    }
}