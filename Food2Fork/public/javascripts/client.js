//get recipe data from server after ingredient request
$.get('/recipes/data', function(data) {
   var recipeData = JSON.parse(JSON.stringify(data));
   //extract appropriate title, imgurl, and food2fork url from json
   var title1 = recipeData[0].title;
   var url1 = recipeData[0].f2f_url;
   var img1 = recipeData[0].image_url;
   var title2 = recipeData[1].title;
   var url2 = recipeData[1].f2f_url;
   var img2 = recipeData[1].image_url;
   var title3 = recipeData[2].title;
   var url3 = recipeData[2].f2f_url;
   var img3 = recipeData[2].image_url;
   var title4 = recipeData[3].title;
   var url4 = recipeData[3].f2f_url;
   var img4 = recipeData[3].image_url;
   var title5 = recipeData[4].title;
   var url5 = recipeData[4].f2f_url;
   var img5 = recipeData[4].image_url;
   var title6 = recipeData[5].title;
   var url6 = recipeData[5].f2f_url;
   var img6 = recipeData[5].image_url;
   var title7 = recipeData[6].title;
   var url7 = recipeData[6].f2f_url;
   var img7 = recipeData[6].image_url;
   var title8 = recipeData[7].title;
   var url8 = recipeData[7].f2f_url;
   var img8 = recipeData[7].image_url;
   var title9 = recipeData[8].title;
   var url9 = recipeData[8].f2f_url;
   var img9 = recipeData[8].image_url;
   //create variable to append to html doc
   var pic1 = '<div class="floated_img"><a href="'+url1+'"target="_blank"><img src="'+img1+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title1+'</p></div>';
   var pic2 = '<div class="floated_img"><a href="'+url2+'"target="_blank"><img src="'+img2+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title2+'</p></div>';
   var pic3 = '<div class="floated_img"><a href="'+url3+'"target="_blank"><img src="'+img3+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title3+'</p></div><br>';
   var pic4 = '<div class="floated_img"><a href="'+url4+'"target="_blank"><img src="'+img4+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title4+'</p></div>';
   var pic5 = '<div class="floated_img"><a href="'+url5+'"target="_blank"><img src="'+img5+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title5+'</p></div>';
   var pic6 = '<div class="floated_img"><a href="'+url6+'"target="_blank"><img src="'+img6+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title6+'</p></div><br>';
   var pic7 = '<div class="floated_img"><a href="'+url7+'"target="_blank"><img src="'+img7+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title7+'</p></div>';
   var pic8 = '<div class="floated_img"><a href="'+url8+'"target="_blank"><img src="'+img8+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title8+'</p></div>';
   var pic9 = '<div class="floated_img"><a href="'+url9+'"target="_blank"><img src="'+img9+'" vspace=20px; hspace=20px; width=400px; height=290px;></a><p>'+title9+'</p></div>';
   //appepnd pictures to proper part of recipes.html to update page with new pictures and titles
   $('#picDiv').append(pic1);
   $('#picDiv').append(pic2);
   $('#picDiv').append(pic3);
   $('#picDiv').append(pic4);
   $('#picDiv').append(pic5);
   $('#picDiv').append(pic6);
   $('#picDiv').append(pic7);
   $('#picDiv').append(pic8);
   $('#picDiv').append(pic9);
});
