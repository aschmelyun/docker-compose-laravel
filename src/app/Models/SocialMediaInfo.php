<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialMediaInfo extends Model
{
    use HasFactory;

    protected $fillable =[
        'user_id',
        'instagram_link',
        'youtube_link',
        'tiktok_link',
        'instagram_followers',
        'youtube_subscribers',
        'tiktok_followers'
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
