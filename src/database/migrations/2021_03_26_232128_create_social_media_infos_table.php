<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialMediaInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_media_infos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id');
            $table->string('instagram_link')->unique()->nullable();
            $table->string('youtube_link')->unique()->nullable();
            $table->string('tiktok_link')->unique()->nullable();
            $table->unsignedInteger('instagram_followers')->nullable();
            $table->unsignedInteger('youtube_subscribers')->nullable();
            $table->unsignedInteger('tiktok_followers')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_media_infos');
    }
}
