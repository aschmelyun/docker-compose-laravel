<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Models\PortfolioPictures;

trait HasPortfolioPictures
{
    public function addPortfolioPicture(UploadedFile $picture){
        $picture_path =  $picture->storePublicly('portfolio_pictures',['disk' => $this->portfolioPicturesDisk()]);

        PortfolioPictures::create(['user_id'=> $this->id , 'url' => $picture_path]);


    }

    public function removePortfolioPicture($picture_path){
        Storage::disk($this->portfolioPicturesDisk())->delete($picture_path);
    }


    protected function portfolioPicturesDisk(){
        return isset($_ENV['VAPOR_ARTIFACT_NAME'])? 's3' : config('jetstream.portfolio_pictures_disk','public');
    }


}
