(function(e){function t(t){for(var i,n,s=t[0],l=t[1],h=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,h||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={app:0},o=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),r=a.n(i);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("results")],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"results"},[e._m(0),a("p",{staticClass:"search-meta"},[a("span",{staticClass:"current-page"},[a("b",[e._v("Current Page:")]),e._v(" "+e._s(e.page)+" ")]),a("span",{staticClass:"total-pages"},[a("b",[e._v("Pages:")]),e._v(" "+e._s(e.total_pages)+" ")]),a("span",{staticClass:"total-results"},[a("b",[e._v("Count:")]),e._v(" "+e._s(e.total_results)+" ")])]),a("ul",e._l(e.results,(function(t,i){return a("li",{key:i,staticClass:"movie-item"},[a("img",{staticClass:"poster-image",attrs:{src:"https://image.tmdb.org/t/p/w150_and_h225_bestv2"+t.poster_path,alt:t.title+"Poster"}}),a("h2",{staticClass:"title"},[a("a",{attrs:{href:"https://www.themoviedb.org/movie/"+t.id}},[e._v(e._s(t.title))])]),a("div",{staticClass:"ratings"},[t.vote_average>8?a("span",{staticClass:"rating-category critics-choice"},[e._v("Critic's Choice")]):t.vote_average>7&&t.vote_average<=8?a("span",{staticClass:"rating-category well-liked"},[e._v("Well Liked")]):a("span",{staticClass:"rating-category stinker"},[e._v("Stinker")]),a("span",{staticClass:"vote-average"},[e._v(e._s(t.vote_average))]),e._v(" with "),a("span",{staticClass:"vote-count"},[e._v(e._s(t.vote_count))]),e._v(" votes ")]),a("p",{staticClass:"overview"},[e._v(e._s(t.overview))]),a("p",{staticClass:"release-date"},[e._v("Original Release: "+e._s(t.release_date))]),a("ul",{staticClass:"genre-list"},e._l(t.genres,(function(t,i){return a("li",{key:i},[e._v(e._s(t))])})),0)])})),0)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v(" Top Movies from the 20 "),a("sup",[e._v("th")]),e._v(" Century ")])}],l={page:1,total_results:147445,total_pages:7373,results:[{vote_count:9597,id:550,video:!1,vote_average:8.3,title:"Fight Club",popularity:182.584216,poster_path:"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",original_language:"en",original_title:"Fight Club",backdrop_path:"/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",adult:!1,overview:'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',release_date:"1999-10-15",genres:["Drama"]},{vote_count:8581,id:680,video:!1,vote_average:8.3,title:"Pulp Fiction",popularity:170.329535,poster_path:"/dM2w364MScsjFf8pfMbaWUcWrR.jpg",original_language:"en",original_title:"Pulp Fiction",backdrop_path:"/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg",adult:!1,overview:"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",release_date:"1994-09-10",genres:["Thriller","Crime"]},{vote_count:3676,id:78,video:!1,vote_average:7.9,title:"Blade Runner",popularity:105.797529,poster_path:"/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg",original_language:"en",original_title:"Blade Runner",backdrop_path:"/k36huckDH0v3LP1zo7maFt3mJC0.jpg",adult:!1,overview:"In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",release_date:"1982-06-25",genres:["Science Fiction","Drama","Thriller"]},{vote_count:8315,id:278,video:!1,vote_average:8.5,title:"The Shawshank Redemption",popularity:96.928779,poster_path:"/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",original_language:"en",original_title:"The Shawshank Redemption",backdrop_path:"/xBKGJQsAIeweesB79KC89FpBrVr.jpg",adult:!1,overview:"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",release_date:"1994-09-23",genres:["Drama","Crime"]},{vote_count:8073,id:13,video:!1,vote_average:8.2,title:"Forrest Gump",popularity:95.175752,poster_path:"/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",original_language:"en",original_title:"Forrest Gump",backdrop_path:"/d5ud5KadGTrY6UQzzNIuK6L0Xyo.jpg",adult:!1,overview:"A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",release_date:"1994-07-06",genres:["Comedy","Drama","Romance"]},{vote_count:9013,id:603,video:!1,vote_average:7.9,title:"The Matrix",popularity:90.176842,poster_path:"/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",original_language:"en",original_title:"The Matrix",backdrop_path:"/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",adult:!1,overview:"Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",release_date:"1999-03-30",genres:["Action","Science Fiction"]},{vote_count:6725,id:11,video:!1,vote_average:8.1,title:"Star Wars",popularity:75.374148,poster_path:"/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",original_language:"en",original_title:"Star Wars",backdrop_path:"/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",adult:!1,overview:"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",release_date:"1977-05-25",genres:["Adventure","Action","Science Fiction"]},{vote_count:5990,id:238,video:!1,vote_average:8.5,title:"The Godfather",popularity:75.060085,poster_path:"/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",original_language:"en",original_title:"The Godfather",backdrop_path:"/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",adult:!1,overview:"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",release_date:"1972-03-14",genres:["Drama","Crime"]},{vote_count:4401,id:424,video:!1,vote_average:8.3,title:"Schindler's List",popularity:66.861159,poster_path:"/yPisjyLweCl1tbgwgtzBCNCBle.jpg",original_language:"en",original_title:"Schindler's List",backdrop_path:"/rIpSszng8P0DL0TimSzZbpfnvh1.jpg",adult:!1,overview:"The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",release_date:"1993-11-29",genres:["Drama","History","War"]},{vote_count:7692,id:597,video:!1,vote_average:7.5,title:"Titanic",popularity:60.685933,poster_path:"/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",original_language:"en",original_title:"Titanic",backdrop_path:"/fVcZErSWa7gyENuj8IWp8eAfCnL.jpg",adult:!1,overview:"84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",release_date:"1997-11-18",genres:["Drama","Romance","Thriller"]},{vote_count:5869,id:807,video:!1,vote_average:8.1,title:"Se7en",popularity:55.460787,poster_path:"/8zw8IL4zEPjkh8Aysdcd0FwGMb0.jpg",original_language:"en",original_title:"Se7en",backdrop_path:"/ba4CpvnaxvAgff2jHiaqJrVpZJ5.jpg",adult:!1,overview:'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',release_date:"1995-09-22",genres:["Crime","Mystery","Thriller"]},{vote_count:5479,id:8587,video:!1,vote_average:8,title:"The Lion King",popularity:54.717432,poster_path:"/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",original_language:"en",original_title:"The Lion King",backdrop_path:"/6lL49SOgBtqiXMs7Y5HWBYH3X9Z.jpg",adult:!1,overview:"A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",release_date:"1994-06-23",genres:["Family","Animation","Drama"]},{vote_count:3398,id:240,video:!1,vote_average:8.3,title:"The Godfather: Part II",popularity:54.569632,poster_path:"/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",original_language:"en",original_title:"The Godfather: Part II",backdrop_path:"/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",adult:!1,overview:"In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",release_date:"1974-12-20",genres:["Drama","Crime"]},{vote_count:5371,id:862,video:!1,vote_average:7.7,title:"Toy Story",popularity:54.025148,poster_path:"/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",original_language:"en",original_title:"Toy Story",backdrop_path:"/dji4Fm0gCDVb9DQQMRvAI8YNnTz.jpg",adult:!1,overview:"Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",release_date:"1995-10-30",genres:["Animation","Comedy","Family"]},{vote_count:3601,id:637,video:!1,vote_average:8.3,title:"Life Is Beautiful",popularity:53.302253,poster_path:"/f7DImXDebOs148U4uPjI61iDvaK.jpg",original_language:"it",original_title:"La vita è bella",backdrop_path:"/bORe0eI72D874TMawOOFvqWS6Xe.jpg",adult:!1,overview:"A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",release_date:"1997-12-20",genres:["Comedy","Drama"]},{vote_count:6185,id:105,video:!1,vote_average:8,title:"Back to the Future",popularity:52.531937,poster_path:"/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",original_language:"en",original_title:"Back to the Future",backdrop_path:"/55LP95aktZlGn2uRKO15qEUrIfU.jpg",adult:!1,overview:"Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",release_date:"1985-07-03",genres:["Adventure","Comedy","Science Fiction","Family"]},{vote_count:2983,id:510,video:!1,vote_average:8.2,title:"One Flew Over the Cuckoo's Nest",popularity:50.106792,poster_path:"/2Sns5oMb356JNdBHgBETjIpRYy9.jpg",original_language:"en",original_title:"One Flew Over the Cuckoo's Nest",backdrop_path:"/4E7YQcwui0PfNXguf4V2X8YocPC.jpg",adult:!1,overview:"While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",release_date:"1975-11-18",genres:["Drama"]},{vote_count:4245,id:280,video:!1,vote_average:7.7,title:"Terminator 2: Judgment Day",popularity:49.651617,poster_path:"/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg",original_language:"en",original_title:"Terminator 2: Judgment Day",backdrop_path:"/d9AqtruwS8nljKjL5aYzM42hQJr.jpg",adult:!1,overview:"Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",release_date:"1991-07-01",genres:["Action","Thriller","Science Fiction"]},{vote_count:4272,id:101,video:!1,vote_average:8.2,title:"Leon: The Professional",popularity:48.712196,poster_path:"/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg",original_language:"fr",original_title:"Léon",backdrop_path:"/mGN0lH2phYfesyEVqP2xvGUaxAQ.jpg",adult:!1,overview:"Leon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Leon's footsteps.",release_date:"1994-09-14",genres:["Thriller","Crime","Drama"]},{vote_count:4120,id:497,video:!1,vote_average:8.2,title:"The Green Mile",popularity:48.323451,poster_path:"/3yJUlOtVa09CYJocwBU8eAryja0.jpg",original_language:"en",original_title:"The Green Mile",backdrop_path:"/vOfEyKHfE8vNWzMYloDCXELiapP.jpg",adult:!1,overview:"A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",release_date:"1999-12-10",genres:["Fantasy","Drama","Crime"]}]},h={data:function(){return l}},p=h,d=(a("7ae9"),a("2877")),u=Object(d["a"])(p,n,s,!1,null,"f8a2c19e",null),c=u.exports,g={name:"app",components:{Results:c}},v=g,_=(a("034f"),Object(d["a"])(v,r,o,!1,null,null,null)),f=_.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(f)}}).$mount("#app")},"7ae9":function(e,t,a){"use strict";var i=a("8c38"),r=a.n(i);r.a},"85ec":function(e,t,a){},"8c38":function(e,t,a){}});
//# sourceMappingURL=app.c5c31f8e.js.map