$("#LinkList96").each(function() {
    var k = "<ul id='menu-main-nav'><li><ul class='sub-menu'>";
    $("#LinkList96 li").each(function() {
        var a = $(this).text(),
        o = a.substr(0, 1),
        p = a.substr(1);
        "_" == o ? (o = $(this).find("a").attr("href"), k += '<li><a href="' + o + '">' + p + "</a></li>") : (o = $(this).find("a").attr("href"), k += '</ul></li><li><a href="' + o + '">' + a + "</a><ul class='sub-menu'>")
    });
    k += "</ul></li></ul>";
    $(this).html(k);
    $("#LinkList96 ul").each(function() {
        var k = $(this);
        if (k.html().replace(/\s|&nbsp;/g, "").length == 0) k.remove()
    });
    $("#LinkList96 li").each(function() {
        var k = $(this);
        if (k.html().replace(/\s|&nbsp;/g, "").length == 0) k.remove()
    })
});
$(document).ready(function() {
    var hld = $("#HTML905").text();
    $("#tagline").html(hld)
});
$(document).ready(function() {
    $("#menu").show();
    $("ul.sub-menu").parent("li").addClass("has-children");
    $("#menu ul li").each(function() {
        $(this).hoverTimeout(0,
        function() {
            $(this).children("ul").slideDown()
        },
        0,
        function() {
            $(this).children("ul").hide()
        })
    });
    $(".index .post-outer,.archive .post-outer").each(function() {
        $(this).find(".block-image .thumb a").attr("style",
        function(a, b) {
            return b.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style",
        function(a, b) {
            return b.replace("s72-c", "s1600")
        })
    });
    $(".index .post-outer,.archive .post-outer").each(function() {
        $(this).find(".block-image .thumb a").attr("style",
        function(a, b) {
            return b.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png", "" + NO_IMAGE + "")
        })
    });
    $("#sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");
    $('.PopularPosts ul li img').each(function() {
        $(this).attr('src',
        function(i, src) {
            return src.replace('/default.jpg', '/mqdefault.jpg')
        }).attr('src',
        function(i, src) {
            return src.replace('s72-c', 's1600')
        }).attr('src',
        function(i, src) {
            return src.replace('w72-h72-p-nu', 's1600')
        })
    });
    $(".PopularPosts .item-thumbnail a").prepend('<span class="img-overlay"/>');
    $('.avatar-image-container img').each(function() {
        $(this).attr('src',
        function(i, src) {
            return src.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png')
        }).attr('src',
        function(i, src) {
            return src.replace('/s35', '/s45')
        })
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('#back-to-top').fadeIn()
        } else {
            $('#back-to-top').fadeOut()
        }
    });
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        },
        800);
        return false
    });
    $('body').addClass('img-anime');
    $(window).bind('load resize scroll',
    function() {
        var window = $(this).height();
        $('.box-image,.bf-thumb,.rcthumb,.PopularPosts img,.home .block-image .thumb a,.tc-thumb a,.related-thumb a,.PopularPosts .item-thumbnail a,.cmm-img').each(function() {
            var qudr = .1 * $(this).height();
            var omger = qudr - window + $(this).offset().top;
            var lom = $(document).scrollTop();
            if (lom > omger) {
                $(this).addClass('img-effect')
            }
        })
    })
});
$(window).bind("load",
function() {
    $('.Label a,.postags a,.label-head a,.box-title h2.title a,.first-tag a,.post-tag').each(function() {
        var labelPage = $(this).attr('href');
        $(this).attr('href', labelPage + '?&max-results=' + LABEL_SEARCH_NUM + '')
    })
});
jQuery(document).ready(function($) {
    $('#random-icon').each(function() {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
                t = t.feed.entry.length - 3,
                t = Math.floor(Math.random() * (t - 0 + 1)) + 0,
                0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1),
                t == 0 && (t == 1),
                $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=1",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var url = "";
                        var ric = '';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    url = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var title = data.feed.entry[i].title.$t;
                            ric += '<a id="radn-icon" href="' + url + '" title="' + title + '"></a>'
                        }
                        if (document.URL.split('?')[1]=='random'){
                            window.location.href=url
                        }else{
                            $('#random-icon').html(ric);
                        $('#radn-icon').tipsy({
                            gravity: 'n'
                        })
                    }
                    }
                })
            }
        })
    })
});
$('.ready-widget .HTML .widget-content .recentcomments').each(function() {
    $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=" + WIDGET_RECENT_COMMENT_NUM,
        type: 'get',
        dataType: "jsonp",
        success: function(data) {
            var url = "";
            var cmmcode = '<ul class="cmm-widget">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                if (i == data.feed.entry.length) break;
                for (var k = 0; k < data.feed.entry[i].link.length; k++) {
                    if (data.feed.entry[i].link[k].rel == 'alternate') {
                        url = data.feed.entry[i].link[k].href;
                        break
                    }
                }
                if ("content" in data.feed.entry[i]) {
                    var content = data.feed.entry[i].content.$t
                } else if ("summary" in b_rc) {
                    var content = data.feed.entry[i].summary.$t
                } else var content = "";
                var re = /<\S[^>]*>/g;
                content = content.replace(re, "");
                if (content.length > 70) {
                    content = '' + content.substring(0, 50) + '...'
                }
                var title = data.feed.entry[i].title.$t;
                var author = data.feed.entry[i].author[0].name.$t;
                var thumburl = data.feed.entry[i].author[0].gd$image.src;
                if (thumburl.match('http://img1.blogblog.com/img/blank.gif')) {
                    var avatar = 'http://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png'
                } else {
                    if (thumburl.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var avatar = 'http://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png'
                    } else {
                        var avatar = thumburl
                    }
                };
                cmmcode += '<li><div class="cmm-avatar"><img class="cmm-img" src="' + avatar + '"/></div><a href="' + url + '">' + author + '</a><span>"' + content + '"</span></li>'
            }
            cmmcode += '</ul><div class="clear"/>';
            $('.ready-widget .HTML .widget-content .recentcomments').each(function() {
                if ($(this).attr("class").match("recentcomments")) {
                    $(this).html(cmmcode)
                }
            })
        }
    })
});
$('.ready-widget .HTML .widget-content .randomposts').each(function() {
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: 'get',
        dataType: "jsonp",
        success: function(t) {
            t = t.feed.entry.length - 3,
            t = Math.floor(Math.random() * (t - 0 + 1)) + 0,
            0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1),
            t == 0 && (t == 1),
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=" + WIDGET_RANDOM_POST_NUM,
                type: 'get',
                dataType: "jsonp",
                success: function(data) {
                    var url = "";
                    var randomcode = '<ul class="custom-widget">';
                    for (var i = 0; i < data.feed.entry.length; i++) {
                        for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                            if (data.feed.entry[i].link[j].rel == "alternate") {
                                url = data.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var title = data.feed.entry[i].title.$t;
                        var get_date = data.feed.entry[i].published.$t,
                        year = get_date.substring(0, 4),
                        month = get_date.substring(5, 7),
                        day = get_date.substring(8, 10),
                        date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
                        var content = data.feed.entry[i].content.$t;
                        var $content = $('<div>').html(content);
                        if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            var image = src2
                        } else if (content.indexOf("<img") > -1) {
                            var src = $content.find('img:first').attr('src');
                            var image = src
                        } else {
                            var image = NO_IMAGE
                        }
                        randomcode += '<li><a class="rcthumb" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + url + '">' + title + '</a></h3></div></li>'
                    }
                    randomcode += '</ul><div class="clear"/>';
                    $('.ready-widget .HTML .widget-content .randomposts').each(function() {
                        if ($(this).attr("class").match("randomposts")) {
                            $(this).html(randomcode);
                            $(this).find('.rcthumb').each(function() {
                                $(this).attr('style',
                                function(i, src) {
                                    return src.replace('/default.jpg', '/mqdefault.jpg')
                                }).attr('style',
                                function(i, src) {
                                    return src.replace('s72-c', 's1600')
                                })
                            })
                        }
                    })
                }
            })
        }
    })
});
$('.ready-widget .HTML .widget-content .recentposts').each(function() {
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: 'get',
        dataType: "jsonp",
        success: function(datax) {
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&max-results=" + WIDGET_RECENT_POST_NUM,
                type: 'get',
                dataType: "jsonp",
                success: function(data) {
                    var url = "";
                    var recentcode = '<ul class="custom-widget">';
                    for (var i = 0; i < data.feed.entry.length; i++) {
                        for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                            if (data.feed.entry[i].link[j].rel == "alternate") {
                                url = data.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var title = data.feed.entry[i].title.$t;
                        var get_date = data.feed.entry[i].published.$t,
                        year = get_date.substring(0, 4),
                        month = get_date.substring(5, 7),
                        day = get_date.substring(8, 10),
                        date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
                        var content = data.feed.entry[i].content.$t;
                        var $content = $('<div>').html(content);
                        if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            var image = src2
                        } else if (content.indexOf("<img") > -1) {
                            var src = $content.find('img:first').attr('src');
                            var image = src
                        } else {
                            var image = NO_IMAGE
                        }
                        recentcode += '<li><a class="rcthumb" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + url + '">' + title + '</a></h3></div></li>'
                    }
                    recentcode += '</ul><div class="clear"/>';
                    $('.ready-widget .HTML .widget-content .recentposts').each(function() {
                        if ($(this).attr("class").match("recentposts")) {
                            $(this).html(recentcode);
                            $(this).find('.rcthumb').each(function() {
                                $(this).attr('style',
                                function(i, src) {
                                    return src.replace('/default.jpg', '/mqdefault.jpg')
                                }).attr('style',
                                function(i, src) {
                                    return src.replace('s72-c', 's1600')
                                })
                            })
                        }
                    })
                }
            })
        }
    })
});
$("#related-ready").each(function() {
    var b = $(this).text();
    $.ajax({
        url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<div class="related-posts">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url;
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src');
                    var k = q
                } else {
                    var k = NO_IMAGE
                }
                h += '<li class="related-item"><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><h3><a href="' + u + '">' + g + '</a></h3></div></li>'
            }
            h += '</div><div class="clear"/>';
            $("#related-ready").html(h);
            $('.related-img').each(function() {
                $(this).attr('style',
                function(i, src) {
                    return src.replace('/default.jpg', '/hqdefault.jpg')
                }).attr('style',
                function(i, src) {
                    return src.replace('s72-c', 's1600')
                })
            })
        }
    })
});
