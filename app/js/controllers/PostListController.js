'use strict';

 postsApp.controller('PostListController',
     function PostListController($scope, postData){
        $scope.getImg = function(s){
            var start=-1, end=-1;
            for(var i=0;i<s.length;i++){
              if(s.charAt(i)==="<" && s.charAt(i+1)==="i" && 
              s.charAt(i+2)==="m" && s.charAt(i+3)==="g"){
               // console.log(s.charAt(i));
               // console.log(i);
                start=i;
                //window.alert(i);
                
                for(var j=i;j<s.length;j++){
                  if(s.charAt(j)==="/" && s.charAt(j+1)==='>'){
                     //console.log(s.charAt(j));
                    //console.log(j);
                    end=j+2;
                    break;
                  }
                }
                
                if(start!=-1 && end!=-1){
                 return s.substring(start,end);
                }
                
                return "";
              }
            }
        }
        $scope.getPara = function(s){
            var start=-1, end=-1;
            for(var i=0;i<s.length;i++){
              if(s.charAt(i)==="<" && s.charAt(i+1)==="p" && 
              s.charAt(i+2)===">" && s.charAt(i+3)!=="<"){
                //console.log(s.charAt(i));
                //console.log(i);
                start=i;
                //window.alert(i);
                
                for(var j=i+3;j<s.length;j++){
                  if(s.charAt(j)==="<" && s.charAt(j+1)==='/' && s.charAt(j+2)==='p' && s.charAt(j+3)==='>'){
                     //console.log(s.charAt(j+1));
                    //console.log(j);
                    end=j+4;
                    break;
                  }
                }
                if(start!=-1 && end!=-1){
                    return s.substring(start,end);
                    break;    
                }
                return "";
              }
            }
        }
        // console.log(postData.getAllPosts());
         $scope.Posts=postData.getAllPosts();  
         /*$scope.Posts=[
                {
                id:1,
                date:"23 Jun 2018",
                emailID:"moin@gmail.com",
                authorName:"moin",
                postTitle:"Congress revokes Mani Shankar Aiyar’s suspension",
                postShortDescription:"Nine months after being suspended as a primary member of Congress for making a controversial statement against Prime Minister Narendra Modi, party president Rahul Gandhi on Saturday approved the recommendation of the disciplinary committee of the party to revoke his suspension.",
                postContent:'<p></p><p></p><p><img src="https://www.thehindu.com/news/national/article21291784.ece/alternates/FREE_660/THJVNMANISHANKARAIYAR" alt="Former Union Minister Mani Shankar Aiyar. A file photo." title="Former Union Minister Mani Shankar Aiyar. A file photo." class="media-object adaptive placeholder lead-img" style="width: 660px;"/></p><p><span class="lead-img-caption " style="width: 660px;"></span></p><p><i>Former Union Minister Mani Shankar Aiyar. A file photo.   | Photo Credit: </i><a href="https://www.thehindu.com/profile/photographers/K.V.S.-Giri/" style="background-color: transparent;color: white;text-decoration: underline;"><i>K.V.S. Giri</i></a></p><p></p><p></p><p></p><p></p><p>Nine months after being suspended as a primary member of Congress for making a controversial statement against Prime Minister Narendra Modi, party president Rahul Gandhi on Saturday approved the recommendation of the disciplinary committee of the party to revoke his suspension.</p><p>A statement from Ashok Gehlot, the general secretary for organizational matters, said Mr Gandhi has accepted the recommendation of the Central Disciplinary Committee to revoke his suspension with immediate effect.</p><p>Mr. Aiyar<a href="https://www.thehindu.com/news/national/congress-suspends-mani-shankar-aiyar-over-neech-jibe-against-pm-modi/article21291785.ece" title="" style="background-color: transparent;"> was suspended </a>after he referred to Prime Minister as “<em>neech</em>” (a low life) in December last year, right in the middle of the Gujarat elections.</p><p>The former MP had called Prime Minister Narendra Modi “<em>neech kism ka aadmi</em>” in reaction to Mr. Modi’s speech at the inauguration of the Ambedkar International Centre, where he accused the Congress of systematically undermining Ambedkar’s legacy.</p><p>Mr. Aiyar does not hold any post in the party but the Congress suspended his memerbership to “send a strong signal.”</p><p>After the controversial remark, Mr. Gandhi took to Twitter to publicly censure Mr. Aiyar. “BJP and PM routinely use filthy language to attack Congress party. Congress has a different culture and heritage. I do not appreciate the tone and language used by Mr. Mani Shankar Aiyar to address the PM. Both the Congress and I expect him to apologise for what he said,” he had tweeted.</p><p>Though Mr. Aiyar had regretted his comments soon after, the Congress had suspended him from the primary membership of the party.</p><p></p><p><a href="https://github.com/fraywing/textAngular"></a> </p><p></p>',
                views:22
                },
                {
                id:2,
                date:"21 Mar 2018",
                emailID:"syed@gmail.com",
                authorName:"syed",
                postTitle:"Kofi Annan — mediator and humanist",
                postShortDescription:"Former UN Secretary-General and Nobel Peace Prize laureate passed away on Saturday",
                postContent:"<p></p><p></p><p></p><p></p><p><img src='https://www.thehindu.com/news/international/viux02/article24726892.ece/alternates/FREE_300/TH19KOFI' alt='Kofi Annan' title='Kofi Annan' class='media-object adaptive placeholder lead-img' style='width: 300px;float: left;'/></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class='lead-img-caption ' style='width: 300px;'></span></p><p><i>Kofi Annan   | Photo Credit: <a href='https://www.thehindu.com/profile/photographers/AFP/' style='background-color: transparent;color: white;text-decoration: underline;'>AFP</a></i></p><p></p><p></p><p></p><p>Former UN Secretary-General and Nobel Peace Prize laureate passed away on Saturday</p><p></p><p>Former United Nations Secretary-General and Nobel Peace Prize laureate Kofi Annan, who died on Saturday, will be remembered as a dedicated humanitarian whose career was tarnished by ugly conflicts that spun out of control.</p><p>Mr. Annan was unable to bring peace to Syria and bring to rest the failures of diplomacy in Rwanda, Bosnia, Darfur, Cyprus, Somalia and Iraq, which are likely to drown out the plaudits for his softly spoken mediation and efforts to eradicate poverty and AIDS that won him the 2001 Nobel Peace Prize.</p><p>Mr. Annan was brought up in an ethnically divided culture in his native Ghana, but one where dialogue was prized and outright conflict rare.</p><p>“He’s driven by the idea of ‘don't think no’; always looking for the best outcome,” Fred Eckhard, Mr. Annan's spokesman during his time as Secretary-General, once told Reuters.</p><p>His reputation as a mediator was burnished by his success in halting a spiralling conflict in Kenya in 2007, when rival claims to the presidency caused ethnic massacres in which more than 1,200 died. Mr. Annan put the rivals in a room and told them: “There is only one Kenya”.</p><p>He then persuaded one of them to accept the post of prime minister in a joint government. The violence ended.</p><p></p><p>Rwanda massacre</p><p>But earlier in his career, Mr. Annan’s record was less successful. He was head of U.N. peacekeeping in 1994, when he acknowledges he should have done more to help prevent the slaughter of 8,00,000 Rwandan Tutsis and moderate Hutus.</p><p>The greatest reproach was that Mr. Annan failed to act on a telegram from the U.N. peacekeeper commander, General Romeo Dallaire, urging a move against arms caches being built up by Hutu extremists.</p><p>In a book scathing about the world's failure to act, Gen. Dallaire however, had only praise for Mr. Annan, describing his “humanism and dedication to the plight of others”.</p><p></p><p></p><p></p><p><a href='https://github.com/fraywing/textAngular'></a> </p><p></p><p></p>",
                views:50
                },
                {
                id:3,
                date:"2 Oct 2018",
                emailID:"Django@gmail.com",
                authorName:"Django",
                postTitle:"Visiting acting Law and Information Minister says there is a thaw in India-Pakistan relations.",
                postShortDescription:"Former UN Secretary-General and Nobel Peace Prize laureate passed away on Saturday",
                postContent:'<p></p><p></p><p></p><p></p><p></p><p></p><p><br/><img src="https://www.thehindu.com/news/national/9vfqt3/article24720131.ece/alternates/FREE_300/ALIZAFAR" alt="External Affairs Minister Sushma Swaraj and Pakistan’s acting Law and Information Minister Syed Ali Zafar during former Prime Minister Atal Bihari Vajpayee’s cremation at the Rashtriya Smriti Sthal in New Delhi on August 17, 2018." title="External Affairs Minister Sushma Swaraj and Pakistan’s acting Law and Information Minister Syed Ali Zafar during former Prime Minister Atal Bihari Vajpayee’s cremation at the Rashtriya Smriti Sthal in New Delhi on August 17, 2018." class="media-object adaptive placeholder lead-img" style="width: 300px;float: left;"/></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class="lead-img-caption " style="width: 300px;"></span></p><p>External Affairs Minister Sushma Swaraj and Pakistan’s acting Law and Information Minister Syed Ali Zafar during former Prime Minister Atal Bihari Vajpayee’s cremation at the Rashtriya Smriti Sthal in New Delhi on August 17, 2018.   | Photo Credit: <a href="https://www.thehindu.com/profile/photographers/PTI/" style="background-color: transparent;color: white;text-decoration: underline;">PTI</a></p><p></p><p></p><p><span class="more-in" style="font-size: 10px;">MORE-IN</span></p><p><a href="https://www.thehindu.com/topic/Atal-Bihari-Vajpayee-1924-2018-/" class="topic-1 txt" style="width: 150px;font-size: 14px;text-align: center;float: left;">Atal Bihari Vajpayee (1924-2018)</a></p><p></p><p>Visiting acting Law and Information Minister says there is a thaw in India-Pakistan relations.</p><p></p><p>The decision to send a Pakistani delegation to attend former Prime Minister Atal Bihari Vajpayee’s funeral was taken by “all stakeholders” including Prime Minister-designate Imran Khan, said visiting acting Law and Information Minister Syed Ali Zafar. “This was an occasion where all felt that Pakistan must be present and share your grief,” Mr. Zafar, who is part of the caretaker government demitting office, said in an interview to <em>The Hindu</em>.</p><p></p><p>Positive move</p><p></p><p>“A very positive move and hopes of a thaw came during Mr. Imran Khan’s speech after the election and then the call by the Indian Prime Minister Narendra Modi [to congratulate Mr. Khan] changed the mood positively.”</p><p>Mr. Zafar met External Affairs Minister Sushma Swaraj, one of the very few meetings she has had with Pakistani officials since her visit to Islamabad in December 2015, after which the Pathankot airbase attack derailed ties.</p><p>The External Affairs Ministry spokesperson said the two leaders had remembered a “visionary (Vajpayee) who dreamed [of a] terror-free and prosperous subcontinent,” a reference to India’s demand that Pakistan end support to terror groups.</p><p></p><p>Recites poem</p><p></p><p>Speaking to journalists after the meeting, Mr. Zafar, who recited Mr. Vajpayee’s poem from his visit to Lahore in 1999, “<em>Jung nahin hone denge </em>(We won’t allow a war)”, also said that he hoped there would be other “less sad” meetings when “[India-Pakistan] issues, including Jammu and Kashmir, will be resolved through dialogue.”</p><p>Asked if tensions between the two countries had been discussed in his meeting with Ms. Swaraj, Mr. Zafar replied, “This was not the occasion to discuss issues of a political nature.”</p><p>“Our meeting was positive, and I sensed a feeling from both sides that there could be progress, and I hope that in the coming days we could see more such meetings and progress,” Mr. Zafar, who flew back to Islamabad on Friday night, added.</p><p></p><p></p><p></p><p></p><p></p><p><a href="https://github.com/fraywing/textAngular"></a> </p><p></p><p></p><p></p>',
                views:32
                },
                {
                    id:1,
                    date:"23 Jun 2018",
                    emailID:"moin@gmail.com",
                    authorName:"moin",
                    postTitle:"Congress revokes Mani Shankar Aiyar’s suspension",
                    postShortDescription:"Nine months after being suspended as a primary member of Congress for making a controversial statement against Prime Minister Narendra Modi, party president Rahul Gandhi on Saturday approved the recommendation of the disciplinary committee of the party to revoke his suspension.",
                    postContent:'<p></p><p></p><p><img src="https://www.thehindu.com/news/national/article21291784.ece/alternates/FREE_660/THJVNMANISHANKARAIYAR" alt="Former Union Minister Mani Shankar Aiyar. A file photo." title="Former Union Minister Mani Shankar Aiyar. A file photo." class="media-object adaptive placeholder lead-img" style="width: 660px;"/></p><p><span class="lead-img-caption " style="width: 660px;"></span></p><p><i>Former Union Minister Mani Shankar Aiyar. A file photo.   | Photo Credit: </i><a href="https://www.thehindu.com/profile/photographers/K.V.S.-Giri/" style="background-color: transparent;color: white;text-decoration: underline;"><i>K.V.S. Giri</i></a></p><p></p><p></p><p></p><p></p><p>Nine months after being suspended as a primary member of Congress for making a controversial statement against Prime Minister Narendra Modi, party president Rahul Gandhi on Saturday approved the recommendation of the disciplinary committee of the party to revoke his suspension.</p><p>A statement from Ashok Gehlot, the general secretary for organizational matters, said Mr Gandhi has accepted the recommendation of the Central Disciplinary Committee to revoke his suspension with immediate effect.</p><p>Mr. Aiyar<a href="https://www.thehindu.com/news/national/congress-suspends-mani-shankar-aiyar-over-neech-jibe-against-pm-modi/article21291785.ece" title="" style="background-color: transparent;"> was suspended </a>after he referred to Prime Minister as “<em>neech</em>” (a low life) in December last year, right in the middle of the Gujarat elections.</p><p>The former MP had called Prime Minister Narendra Modi “<em>neech kism ka aadmi</em>” in reaction to Mr. Modi’s speech at the inauguration of the Ambedkar International Centre, where he accused the Congress of systematically undermining Ambedkar’s legacy.</p><p>Mr. Aiyar does not hold any post in the party but the Congress suspended his memerbership to “send a strong signal.”</p><p>After the controversial remark, Mr. Gandhi took to Twitter to publicly censure Mr. Aiyar. “BJP and PM routinely use filthy language to attack Congress party. Congress has a different culture and heritage. I do not appreciate the tone and language used by Mr. Mani Shankar Aiyar to address the PM. Both the Congress and I expect him to apologise for what he said,” he had tweeted.</p><p>Though Mr. Aiyar had regretted his comments soon after, the Congress had suspended him from the primary membership of the party.</p><p></p><p><a href="https://github.com/fraywing/textAngular"></a> </p><p></p>',
                    views:22
                    },
                    {
                    id:2,
                    date:"21 Mar 2018",
                    emailID:"syed@gmail.com",
                    authorName:"syed",
                    postTitle:"Kofi Annan — mediator and humanist",
                    postShortDescription:"Former UN Secretary-General and Nobel Peace Prize laureate passed away on Saturday",
                    postContent:"<p></p><p></p><p></p><p></p><p><img src='https://www.thehindu.com/news/international/viux02/article24726892.ece/alternates/FREE_300/TH19KOFI' alt='Kofi Annan' title='Kofi Annan' class='media-object adaptive placeholder lead-img' style='width: 300px;float: left;'/></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class='lead-img-caption ' style='width: 300px;'></span></p><p><i>Kofi Annan   | Photo Credit: <a href='https://www.thehindu.com/profile/photographers/AFP/' style='background-color: transparent;color: white;text-decoration: underline;'>AFP</a></i></p><p></p><p></p><p></p><p>Former UN Secretary-General and Nobel Peace Prize laureate passed away on Saturday</p><p></p><p>Former United Nations Secretary-General and Nobel Peace Prize laureate Kofi Annan, who died on Saturday, will be remembered as a dedicated humanitarian whose career was tarnished by ugly conflicts that spun out of control.</p><p>Mr. Annan was unable to bring peace to Syria and bring to rest the failures of diplomacy in Rwanda, Bosnia, Darfur, Cyprus, Somalia and Iraq, which are likely to drown out the plaudits for his softly spoken mediation and efforts to eradicate poverty and AIDS that won him the 2001 Nobel Peace Prize.</p><p>Mr. Annan was brought up in an ethnically divided culture in his native Ghana, but one where dialogue was prized and outright conflict rare.</p><p>“He’s driven by the idea of ‘don't think no’; always looking for the best outcome,” Fred Eckhard, Mr. Annan's spokesman during his time as Secretary-General, once told Reuters.</p><p>His reputation as a mediator was burnished by his success in halting a spiralling conflict in Kenya in 2007, when rival claims to the presidency caused ethnic massacres in which more than 1,200 died. Mr. Annan put the rivals in a room and told them: “There is only one Kenya”.</p><p>He then persuaded one of them to accept the post of prime minister in a joint government. The violence ended.</p><p></p><p>Rwanda massacre</p><p>But earlier in his career, Mr. Annan’s record was less successful. He was head of U.N. peacekeeping in 1994, when he acknowledges he should have done more to help prevent the slaughter of 8,00,000 Rwandan Tutsis and moderate Hutus.</p><p>The greatest reproach was that Mr. Annan failed to act on a telegram from the U.N. peacekeeper commander, General Romeo Dallaire, urging a move against arms caches being built up by Hutu extremists.</p><p>In a book scathing about the world's failure to act, Gen. Dallaire however, had only praise for Mr. Annan, describing his “humanism and dedication to the plight of others”.</p><p></p><p></p><p></p><p><a href='https://github.com/fraywing/textAngular'></a> </p><p></p><p></p>",
                    views:50
                    },
                    {
                    id:3,
                    date:"2 Oct 2018",
                    emailID:"Django@gmail.com",
                    authorName:"Django",
                    postTitle:"Visiting acting Law and Information Minister says there is a thaw in India-Pakistan relations.",
                    postShortDescription:"Former UN Secretary-General and Nobel Peace Prize laureate passed away on Saturday",
                    postContent:'<p></p><p></p><p></p><p></p><p></p><p></p><p><br/><img src="https://www.thehindu.com/news/national/9vfqt3/article24720131.ece/alternates/FREE_300/ALIZAFAR" alt="External Affairs Minister Sushma Swaraj and Pakistan’s acting Law and Information Minister Syed Ali Zafar during former Prime Minister Atal Bihari Vajpayee’s cremation at the Rashtriya Smriti Sthal in New Delhi on August 17, 2018." title="External Affairs Minister Sushma Swaraj and Pakistan’s acting Law and Information Minister Syed Ali Zafar during former Prime Minister Atal Bihari Vajpayee’s cremation at the Rashtriya Smriti Sthal in New Delhi on August 17, 2018." class="media-object adaptive placeholder lead-img" style="width: 300px;float: left;"/></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span class="lead-img-caption " style="width: 300px;"></span></p><p>External Affairs Minister Sushma Swaraj and Pakistan’s acting Law and Information Minister Syed Ali Zafar during former Prime Minister Atal Bihari Vajpayee’s cremation at the Rashtriya Smriti Sthal in New Delhi on August 17, 2018.   | Photo Credit: <a href="https://www.thehindu.com/profile/photographers/PTI/" style="background-color: transparent;color: white;text-decoration: underline;">PTI</a></p><p></p><p></p><p><span class="more-in" style="font-size: 10px;">MORE-IN</span></p><p><a href="https://www.thehindu.com/topic/Atal-Bihari-Vajpayee-1924-2018-/" class="topic-1 txt" style="width: 150px;font-size: 14px;text-align: center;float: left;">Atal Bihari Vajpayee (1924-2018)</a></p><p></p><p>Visiting acting Law and Information Minister says there is a thaw in India-Pakistan relations.</p><p></p><p>The decision to send a Pakistani delegation to attend former Prime Minister Atal Bihari Vajpayee’s funeral was taken by “all stakeholders” including Prime Minister-designate Imran Khan, said visiting acting Law and Information Minister Syed Ali Zafar. “This was an occasion where all felt that Pakistan must be present and share your grief,” Mr. Zafar, who is part of the caretaker government demitting office, said in an interview to <em>The Hindu</em>.</p><p></p><p>Positive move</p><p></p><p>“A very positive move and hopes of a thaw came during Mr. Imran Khan’s speech after the election and then the call by the Indian Prime Minister Narendra Modi [to congratulate Mr. Khan] changed the mood positively.”</p><p>Mr. Zafar met External Affairs Minister Sushma Swaraj, one of the very few meetings she has had with Pakistani officials since her visit to Islamabad in December 2015, after which the Pathankot airbase attack derailed ties.</p><p>The External Affairs Ministry spokesperson said the two leaders had remembered a “visionary (Vajpayee) who dreamed [of a] terror-free and prosperous subcontinent,” a reference to India’s demand that Pakistan end support to terror groups.</p><p></p><p>Recites poem</p><p></p><p>Speaking to journalists after the meeting, Mr. Zafar, who recited Mr. Vajpayee’s poem from his visit to Lahore in 1999, “<em>Jung nahin hone denge </em>(We won’t allow a war)”, also said that he hoped there would be other “less sad” meetings when “[India-Pakistan] issues, including Jammu and Kashmir, will be resolved through dialogue.”</p><p>Asked if tensions between the two countries had been discussed in his meeting with Ms. Swaraj, Mr. Zafar replied, “This was not the occasion to discuss issues of a political nature.”</p><p>“Our meeting was positive, and I sensed a feeling from both sides that there could be progress, and I hope that in the coming days we could see more such meetings and progress,” Mr. Zafar, who flew back to Islamabad on Friday night, added.</p><p></p><p></p><p></p><p></p><p></p><p><a href="https://github.com/fraywing/textAngular"></a> </p><p></p><p></p><p></p>',
                    views:32
                    }];
        */
     }
 ); 