$('.slider-wrapper .HTML .widget-content').each(function()
	{
	var cat=$(this).find("div").attr("data-label"),num=$(this).find("div").attr("data-results"),b1="recent",b2="label",box=$(this).find("div").attr("class");
	if(box.match(b1))
		{
		$.ajax(
			{
			url:"/feeds/posts/default?alt=json-in-script&max-results="+num,type:'get',dataType:"jsonp",success:function(data)
				{
				var url="";
				var featcode='<div id="featured-slider"><ul class="slides">';
				for(var i=0;
				i<data.feed.entry.length;
				i++)
					{
					for(var j=0;
					j<data.feed.entry[i].link.length;
					j++)
						{
						if(data.feed.entry[i].link[j].rel=="alternate")
							{
							url=data.feed.entry[i].link[j].href;
							break
						}
					}
					var title=data.feed.entry[i].title.$t;
					var author_name=data.feed.entry[i].author[0].name.$t;
					var get_date=data.feed.entry[i].published.$t,year=get_date.substring(0,4),month=get_date.substring(5,7),day=get_date.substring(8,10),date=MONTH_FORMAT[parseInt(month,10)]+' '+day+', '+year;
					var tag=data.feed.entry[i].category[0].term;
					var content=data.feed.entry[i].content.$t;
					var $content=$('<div>').html(content);
					if(content.indexOf("http://www.youtube.com/embed/")>-1||content.indexOf("https://www.youtube.com/embed/")>-1)
						{
						var img2=data.feed.entry[i].media$thumbnail.url;
						var image=img2
					}
					else if(content.indexOf("<img")>-1)
						{
						var img=$content.find('img:first').attr('src');
						var image=img
					}
					else
						{
						var image=NO_IMAGE
					}
					featcode+='<li><a class="slider-img" href="'+url+'"><img width="690" height="410" src="'+image+'" class="attachment-meed-slider-thumb size-meed-slider-thumb wp-post-image" alt="'+title+'" /></a><div class="slide-cap"><h1 class="post-title"><a href="'+url+'">'+title+'</a></h1><span class="feat-divider"></span><span class="post-date">'+date+'</span></div><!--.slide-cap--><div class="slide-cap-bg"></div><!--.slide-cap-bg--><a href="'+url+'" class="slide-overlay"></a></li>'
				}
				featcode+='</ul><div id="slider-nav"/><span id="feat-star-bg"/><span id="feat-star"/></div>';
				$('.slider-wrapper .HTML .widget-content').each(function()
					{
					if($(this).find("div").attr("class").match("recent"))
						{
						$(this).html(featcode);
						$(this).removeClass('widget-content').addClass('slider-content');
						$('#featured-slider').flexslider(
							{
							controlsContainer:'#slider-nav',controlNav:false,pauseOnAction:false,pauseOnHover:true,animation:'fade',animationSpeed:1200,slideshowSpeed:7000,prevText:'',nextText:''
						}
						);
						$(this).find('.rcp-thumb').each(function()
							{
							$(this).attr('style',function(i,src)
								{
								return src.replace('/default.jpg','/hqdefault.jpg')
							}
							).attr('style',function(i,src)
								{
								return src.replace('s72-c','s1600')
							}
							)
						}
						)
					}
				}
				)
			}
		}
		)
	}
	else if(box.match(b2))
		{
		$.ajax(
			{
			url:"/feeds/posts/default/-/"+cat+"?alt=json-in-script&max-results="+num,type:'get',dataType:"jsonp",success:function(data)
				{
				var url="";
				var featcode='<div id="featured-slider"><ul class="slides">';
				for(var i=0;
				i<data.feed.entry.length;
				i++)
					{
					for(var j=0;
					j<data.feed.entry[i].link.length;
					j++)
						{
						if(data.feed.entry[i].link[j].rel=="alternate")
							{
							url=data.feed.entry[i].link[j].href;
							break
						}
					}
					var title=data.feed.entry[i].title.$t;
					var author_name=data.feed.entry[i].author[0].name.$t;
					var get_date=data.feed.entry[i].published.$t,year=get_date.substring(0,4),month=get_date.substring(5,7),day=get_date.substring(8,10),date=MONTH_FORMAT[parseInt(month,10)]+' '+day+', '+year;
					var tag=data.feed.entry[i].category[0].term;
					var content=data.feed.entry[i].content.$t;
					var $content=$('<div>').html(content);
					if(content.indexOf("http://www.youtube.com/embed/")>-1||content.indexOf("https://www.youtube.com/embed/")>-1)
						{
						var img2=data.feed.entry[i].media$thumbnail.url;
						var image=img2
					}
					else if(content.indexOf("<img")>-1)
						{
						var img=$content.find('img:first').attr('src');
						var image=img
					}
					else
						{
						var image=NO_IMAGE
					}
					featcode+='<li><a class="slider-img" href="'+url+'"><img width="690" height="410" src="'+image+'" class="attachment-meed-slider-thumb size-meed-slider-thumb wp-post-image" alt="'+title+'" /></a><div class="slide-cap"><h1 class="post-title"><a href="'+url+'">'+title+'</a></h1><span class="feat-divider"></span><span class="post-date">'+date+'</span></div><!--.slide-cap--><div class="slide-cap-bg"></div><!--.slide-cap-bg--><a href="'+url+'" class="slide-overlay"></a></li>'
				}
				featcode+='</ul><div id="slider-nav"/><span id="feat-star-bg"/><span id="feat-star"/></div>';
				$('.slider-wrapper .HTML .widget-content').each(function()
					{
					if($(this).find("div").attr("class").match("label"))
						{
						$(this).html(featcode);
						$(this).removeClass('widget-content').addClass('slider-content');
						$('#featured-slider').flexslider(
							{
							controlsContainer:'#slider-nav',controlNav:false,pauseOnAction:false,pauseOnHover:true,animation:'fade',animationSpeed:1200,slideshowSpeed:7000,prevText:'',nextText:''
						}
						);
						$(this).find('.rcp-thumb').each(function()
							{
							$(this).attr('style',function(i,src)
								{
								return src.replace('/default.jpg','/hqdefault.jpg')
							}
							).attr('style',function(i,src)
								{
								return src.replace('s72-c','s1600')
							}
							)
						}
						)
					}
				}
				)
			}
		}
		)
	}
}
);
