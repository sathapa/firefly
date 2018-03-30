<style>
	.lead {
	    margin-bottom: 20px;
	    font-size: 14px;
	    font-weight: 200;
	    line-height: 20px;
	    /*font-family: verdena;*/
	}
	.episodes{
	    padding-left: 20px;
	    padding-right: 20px;
	    padding-bottom: 20px;
	    padding-top: 35px;
	    background-color: #fff;
	    border: 1px solid #DEDEDE;
	    border-radius: 3px;
	    -webkit-border-radius: 3px;
	    -moz-border-radius: 3px;
	    margin-bottom: 10px;
	    box-shadow: 0 0 10px rgba(189, 189, 189, 0.4);
	    -webkit-box-shadow: 0 0 10px rgba(189, 189, 189, 0.4);
	    -moz-box-shadow: 0 0 10px rgba(189, 189, 189, 0.4);
	    min-height: 300px;
        margin-right: 60px;
	}
	.each{
		
		padding-bottom:0px;
		    padding-top: -24px;
	}
	.episode{
	    padding-top: 37px;
	}
	.epiig{height:130px;padding-top: -60px;}
	.epwrapper {
	    padding-left: 195px;
	}
	img.epiig {
	    margin-top: -96px;
	}
	h4 {
	    font-size: 17.5px;
	    font-weight: 100;
	}
	.writer{
		margin-top: -12px;
	}
	p#genre {
	    margin-bottom: 0px;
	}
</style>
<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name;
?>

<div class="jumbotron">
  <h1 class="display-3" style="float:left;" id="show_title"></h1>
  <h4 style="float:right;  margin-top: -65px;" id="show_season"> </h4>
  
  <div class="poster_img" style="float:left; 
    margin-top: -28px;    margin-right: 16px;"><img id="poster" /></div>
  <div class="wrapper">
  	  <p id="genre"></p> 
	  <p class="lead" id ="desc"></p>
	  <hr class="my-4">
	  <p class="stars"><span id="cast"></span></p>
	  <p class="writer"> <span id="writer"></span></p>
	  <p><span id="imdb-rating"></span></p>
  </div>
</div>

</div>
</div>
<div id="loading-image"><img style="margin-top:32vh;margin-left:92vh;height:50px;" src="<?= Yii::app()->getBaseUrl(true) ?>/images/loading.gif" /></div>
<div class="span12">
	<div class="episodes">
	
		<input type="hidden" id="noep">
		
		<!-- <div id="episode_1">		</div>
		<div id="episode_2">		</div>
		<div id="episode_3">		</div>
		<div id="episode_4">		</div>
		<div id="episode_5">		</div>
		<div id="episode_6">		</div>
		<div id="episode_7">		</div>
		<div id="episode_8">		</div>
		<div id="episode_9">		</div>
		<div id="episode_10">		</div>
		<div id="episode_11">		</div>
		<div id="episode_12">		</div>
		<div id="episode_13">		</div>
		<div id="episode_14">		</div> -->

	</div>
</div>


