var animations		= ['right','left','top','bottom','rightFade','leftFade','topFade','bottomFade'];
var total_anim		= animations.length;

var easeType		= 'swing';

var animSpeed		= 450;

var $hs_container	= $('#container');
var $hs_areas		= $hs_container.find('area');

$hs_images          = $hs_container.find('img');
var total_images    = $hs_images.length;
var cnt             = 0;
$hs_images.each(function(){
	var $this = $(this);
	$('').load(function(){
		++cnt;
		if(cnt == total_images){
			$hs_areas.each(function(){
				var $area 		= $(this);
				
				$area.data('over',true).bind('mouseenter',function(){
					if($area.data('over')){
						$area.data('over',false);
						
						var total		= $area.children().length;
						
						var $current 	= $area.find('img:visible');
					
						var idx_current = $current.index();
						
						var $next		= (idx_current == total-1) ? $area.children(':first') : $current.next();
						
						
						var anim		= animations[Math.floor(Math.random()*total_anim)];
						switch(anim){
							
							case 'right':
								$current.animate({
									'left':$current.width()+'px'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'left'		: '0px'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
							
							case 'left':
								$current.animate({
									'left':-$current.width()+'px'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'left'		: '0px'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
								
							case 'top':
								$current.animate({
									'top':-$current.height()+'px'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'top'		: '0px'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
							
							case 'bottom':
								$current.animate({
									'top':$current.height()+'px'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'top'		: '0px'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
							
							case 'rightFade':
								$current.animate({
									'left':$current.width()+'px',
									'opacity':'0'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'left'		: '0px',
										'opacity'	: '1'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
							
							case 'leftFade':
								$current.animate({
									'left':-$current.width()+'px','opacity':'0'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'left'		: '0px',
										'opacity'	: '1'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
							
							case 'topFade':
								$current.animate({
									'top':-$current.height()+'px',
									'opacity':'0'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'top'		: '0px',
										'opacity'	: '1'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
								
							case 'bottomFade':
								$current.animate({
									'top':$current.height()+'px',
									'opacity':'0'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'top'		: '0px',
										'opacity'	: '1'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;		
							default:
								$current.animate({
									'left':-$current.width()+'px'
								},
								animSpeed,
								easeType,
								function(){
									$current.hide().css({
										'z-index'	: '1',
										'left'		: '0px'
									});
									$next.css('z-index','9999');
									$area.data('over',true);
								});
								break;
						}	
					}
				});
			});
			
			
			$hs_container.bind('click',function(){
				$hs_areas.trigger('mouseenter');
			});
		}
	}).attr('src',$this.attr('src'));
});			
