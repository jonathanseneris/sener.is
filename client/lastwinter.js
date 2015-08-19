var m = require("mithril");
var mu = require("./mu.js");
var lastwinter = {};

lastwinter = {
  counter: m.prop(0)
};

lastwinter.controller = function() {
  return {};
};

lastwinter.view = function() {
  return m(".layout", [
    m("header", m("a[href='/#/']", {
      class: "goback"
    }, "<", {
      config: m.route
    })),
    m("main", page[lastwinter.counter()]())
  ]);
};

module.exports = lastwinter;


var page = [function() {
    return m("div", [
      m("div", {
        class: "lastwinter"
      }, [
        m("h1", "Match Question #305"),
        m("p", {
          class: "question"
        }, "You are in an art museum when a blind man deliberately starts a fire. He becomes separated from his guide dog and they are both wandering among the flames lost and confused. You face this decision: save the dog, save the arsonist or save an artwork."),
        m("form", {
            class: "okcupid"
          },
          m("input", {
            type: "radio",
            name: "305",
            value: "arsonist"
          }), m("label", "I'd save the arsonist."), m("br"),
          m("input", {
            type: "radio",
            name: "305",
            value: "artwork"
          }), m("label", "I'd save an artwork."), m("br"),
          m("input", {
            type: "radio",
            name: "305",
            value: "dog"
          }), m("label", "I'd save the dog."), m("br"),
          m("input", {
            type: "radio",
            name: "305",
            value: "myself",
          }), m("label", "To hell with that, I'd just save myself."), m("br"),
          m("h3", "Explain your answer: (optional)"),
          m("textarea", {
            name: "explanation"
          })),
        m("button", {
          onclick: function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            lastwinter.counter = m.prop(lastwinter.counter() + 1);
          }
        }, "choose"),
        m("cite", "- OKCupid.com"),
      ])
    ]);
  }, function() {
    return m("div", {
      class: "lastwinter"
    }, [
      m("h1", 'I.'),
      m("p", {
        class: "texthigh"
      }, 'In her heyday, my grandmother was a seamstress for Oscar De La Renta. I stop by her house on my way to school to remind her that it’s her ninety-fifth birthday. "Everybody’s dead," she says.'),
      m("p", {
        class: "textmed"
      }, 'Since her husband passed, she’s marked every calendar occasion by announcing, "I won’t be here next year, I tell you that." After ten years, it’s still her catchphrase, but she’s added another – "I’m too ornery to even die." Sometimes I catch myself laughing at it too loudly.'),
      m("div", {
          class: "textlow"
        }, [
          m("p", 'Professionally, she was some sort of freelance specialist. Mr. De La Renta would give her a sketch, and she’d look at how fancy it was and give him a price which, she says, he never once argued. "I worked for two or three places, but the gowns – I used to like that. I liked everything that was rich looking, y’know?"'),
          m("p", 'I dig for gossip on her designer bosses, but she mostly wants to talk about money. Her daughters, she complains, have all these degrees and no money. In her old age, she supports them – just as in her youth, she supported her parents. "I used to feel so sorry for my father. He worked on the railroad for so long, y’know? He would come in with his salary, and sometimes what he made every week, I made in two days."'),
          m("p", '"I tell you one thing," she says. "Everybody used to say become a secretary and all that. I says to myself no… They never would have made the money I made. God bless my mother and father, I took care of them, bought their house. And this here house, I paid cash. I was the only one in the whole neighborhood."'),
          m("p", 'I’m staring at my iPhone. In five minutes, I’ll leave to catch my train. I have class at night and a paper to write. "I wanted so much to go to college," she’s saying, "but I had to go to work. It was during depression time."'),
          m("p", 'Her front door is open, letting some light in. "Is it cold out?" she asks.'),
          m("p", 'It’s pretty cold, I say.'),
          m("p", '"It is? I’m looking at those clouds. Look at those clouds." She has me get up and kneel next to her. "Here, this way… Don’t they look lovely? It’s like a ceiling, one after another. What is it?"'),
          m("p", 'Through her screen door, it looks like a cotton-ball blanket drawing over the neighborhood. I have to squint, the clouds are so bright on top, but dark as shadows underneath. "Almost looks like snow," she says.'),
          m("p", 'The light is hurting my eyes.'),
          m("p", '"Is it cold out?"')
        ],
        m("button", {
          onclick: function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            lastwinter.counter = m.prop(lastwinter.counter() + 1);
          }
        }, "yes"),
        m("button", {
          onclick: function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            lastwinter.counter = m.prop(lastwinter.counter() + 1);
          }
        }, "no"))

    ]);
  }, function() {
    return m("div", {
        class: "lastwinter"
      },
      m("p", {
        class: "texthigh"
      }, 'On the morning I am to leave for California, I drive to her house so I can park my car and walk to a bus stop. She comes to the door in her nightgown after a minute or so. It’s about 10:30 and she says she hasn’t eaten, but I don’t have time to make anything.'),
      m("p", {
        class: "textmed"
      }, '“Where’s mom?” she asks.'),
      m("div", {
          class: "textlow"
        },
        m("p", '“Mom’s at her house. I’m just putting my car in the garage.”'),
        m("p", '“Do you need me to open it?” She starts turning her walker in the direction of the garage door opener near her bedroom window. I tell her I can do it and slide around her. The garage door opener has come apart into two pieces that I have to squeeze together, but it works. My grandmother pushes her walker into the bedroom and looks at me. “Who let you in?” she asks.'),
        m("p", '“You did, grandma. Just now.”'),
        m("p", 'She shakes her head and turns around again. I give her a hug, remind her I’ll be back in two weeks, and walk to the door. “Does mom know I’m like this?” she asks. She’s squinting at me from across the living room.'),
        m("p", '“Yeah, grandma.”'),
        m("p", '“Oh, okay.” She nods and turns again.'),
        m("button", {
          onclick: function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            lastwinter.counter = m.prop(lastwinter.counter() + 1);
          }
        }, "leave")
      ));
  }, function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "30 September 2012", m("br"),
          "San Francisco. Partly cloudy, high 80º.", m("br"),
          "Daylight: 11 hours 48 minutes.", m("br"),
          "81 days until winter.")),
      m("p", "I’m slipping into black yoga pants in a bathroom stall at the San Francisco International Airport. The TSA is just outside and I hope I don’t look suspicious, but I have three hours before boarding and I’m excited to practice. This is the first airport in the country to have a dedicated yoga room. This is the first day I woke up as a certified yoga teacher."),
      m("p", "The yoga room is cave-like, as there are no lights inside so the only illumination comes through the frosted glass at the entrance. Some badly worn mats and props lie in a bin next to the door. There’s another yogi practicing, a girl who says hello, and I think I say hello back but my mouth doesn’t open, like it’s jammed. By the time I realize, it’s too weird to repeat myself. I set up in the darkest corner and close my eyes."),
      m("p", "Guided meditations were part of my yoga training, something we all had to practice privately and teach publicly. We’d start by drawing attention to different parts of the body, starting at the crown of the head and working down, scanning for unconscious tensions and reminding muscles to relax. From there, most of my classmates guided into visuals of lotus flowers or beams of light. My meditations were non-visual. I just liked a simple mantra that my teacher in New York ended her classes with."),
      m("blockquote",
        m("p", "with each inhale, silently to yourself say “let.”"),
        m("p", "with each exhale, silently to yourself say “go.”"),
        m("p", "inhale, let. exhale, go."),
        m("p", "inhale, let. exhale, go."),
        m("p", "let go.")),
      m("p", "I move through sun salutations, eyes straight ahead, trying to ignore my friendly neighbor’s impressive handstands or her graceful folds. I’m a certified yoga teacher now, I think. Find your center and stop fucking around."),
      m("p", "After making a dedication to the classmates I’d left that morning, I move through a sequence of sun salutations and balances, and as I loosen up I decide to culminate in eka pada rajakapotasana and bakasana, pigeon and crow poses, a private joke about waiting to fly. This is amusing until I then follow with the standard ending to every Western yoga practice, savasana. Corpse pose."),
      m("p", "More than one of my yoga teachers has alluded to a deep philosophy around corpse pose, though I suspect that’s a new age invention rather than ancient yogic tradition. Yoga classes end with the lights down and the students flat on their backs, eyes closed. The idea is that as the body relaxes and breathing slows, so should thought. Whereas other poses bring attention to the physical posture, savasana is most explicitly about mental posture."),
      m("p", "As a writer, I’m afraid to let go of my inner monologue, so meditation is never more than a formality in my practice. Lying on a beat up mat in an airport, afraid to fly, I’m hyperaware that stories are everywhere. The mat, so used and eroded, is a long way from the factory. The diploma, wedged in my carry on yesterday, is already collecting wrinkles. I wonder about the plane I’m about to board, which has probably made several flights already today. Do the bolts pick up moisture from the clouds? What tiny fraction do they loosen during turbulence? What holds up the thin floors under the cabin? What cellular toll did I just pay at the TSA?"),
      m("p", "I know that everything is breaking all the time. If it’s happening on a very small scale, that just means that I can’t see it. My eyes open. The handstand girl is gone, and the room is quiet and empty now, except for me."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  }, function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "Departure: (SFO) 9:25 PM, Sep 30 Sunny, 45º", m("br"),
          "Arrival: (JFK) 5:59 AM, Oct 1 Cloudy, 46º")),
      m("p", "There are no walls in my kitchen. Jay, a friend-of-a-friend handyman, ripped them off and carried them to the dumpster in my driveway. He points to a spot in the wall where he says mice made a nest in the fiberglass. The ceilings, he tells me, rained mouse shit when he pulled them down."),
      m("p", "The Yankees are in the postseason, and since I don’t have a TV or a kitchen, I drive to a nearby sports bar and grill to have dinner. While traveling, I loved dining out by myself, but at home, it’s different. I’m not supposed to be an outsider. I sit in my car in the parking lot with the windows down, disappointed at how crowded the bar looks and calculating the likelihood of an open stool. Loud conversations and TV audio carry from the patio. I remember a menu for takeout sushi under my seat."),
      m("p", "When my kitchen is finished, I want to rent the house and move to California. I figure it’ll be another month, maybe two, but I’ll definitely be gone before winter. Still, that’s another thirty dinners to get through, maybe sixty. I wonder if I gave up too easily on online dating."),
      m("p", "I listen to the play-by-play on the radio. The game is in the second inning already. I’m still in the parking lot, staring blankly at the streetlights coming on, the cars speeding in opposite directions."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  }, function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "13 October 2012", m("br"),
          "NJ. Mostly sunny, 54º.", m("br"),
          "Waning crescent moon.", m("br"),
          "Daylight: 11 hours 12 minutes.")),
      m("p", "havefunmydear is a 24 year old woman living in Mendham, 26.9 miles to my southwest. Her profile says she’s spent the past two years in Nepal and that she’s behind on all the TV shows. She likes yoga and NPR and men who are nice to their mothers. One of her pictures is captioned, “me with my previous boyfriend,” which is just her riding a camel in a Nepali suburb. The camel’s eyelashes are long and elegant, like a giraffe’s."),
      m("p", "message from bonuspig to havefunmydear:"),
      m("p", "I didn't realize camels were so giraffe-like. I like his eyelashes."),
      m("p", "She is my 93% Match and my 2% Enemy."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave"));
  }, function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "18 October 2012", m("br"),
          "NJ. Mostly Cloudy, 67º.", m("br"),
          "Daylight: 10 hours 59 minutes.")),
      m("p", "Jay starts work at my house around nine every morning. I stay in bed until eleven, then shower in the functioning bathroom down the hall and leave for “work,” a cafe across town where I’m writing a screenplay about an aging stripper. I feel like a fraud, having had no training in how to write a screenplay. I don’t even write fiction."),
      m("p", "My background is in essays and profiles, so the screenplay is essentially an interview. The protagonist is my friend, the scenes based on her real stories. Every weekday I order coffee and peanut butter sandwiches, then go through our email history for material. Most of what she writes sounds good already, and I cut-and-paste it as internal monologue. When this gets excessive, I squeeze out a few dialogue scenes, which are brief and terrible. The movie I’m writing is essentially a slideshow. But I can’t eat breakfast at home."),
      m("p", "I would give up, but I’ve already told several people that I’m working on a screenplay about a stripper. Then I feel like a creep, and explain that I just relate to her story. She’s over 35 and living in such a way that isn’t going to last much longer. She nearing her expiration date. I don’t actually like strip clubs, I say. I don’t think anyone believes me."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  }, function() {
    return m("div", {
        class: "lastwinter"
      },

      m("p", "DOG PARK"),
      m("p", "Cut to five people standing in a semi-circle on the pavement outside a large dog park. In the background, five dogs chase each other. The five people are each holding leashes. An older woman stands in the center with an upright posture, dressed in orange and holding an orange leash. The others wear dark autumn colors and slouch. Randi enters the frame from the left with her dog. Nobody makes room for her."),
      m("p", "RANDI (V.O.)"),
      m("p", "I saw Julie Powell at the dog park again today. It was very low key. She didn't really try to engage me in conversation, and actually when I left I heard everyone conversing and laughing."),
      m("p", "SHOT OF RANDI LETTING HER DOG INTO THE DOG PARK, PEOPLE GLANCING AND SNICKERING BEHIND HER. SHOTS OF DOGS TRYING TO SOCIALIZE."),
      m("p", "I just get oddly fascinated and star struck by writers. She had a shirt on that said Powell books. This really annoying guy started talking about what he was reading, and Max tried to mount her dog, but her dog was too big and he fell off.RANDI PULLS MAX AND WALKS AWAY."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  },

  function() {
    return m("div", {
        class: "lastwinter"
      },
      m("p", "In20Years.com is a website that simulates facial aging on any photograph. I upload the picture I used on the dating site, expecting it’ll add a few wrinkles and grey hairs. But it does more."),
      m("p", "My fifty-two year old skin looks like a sweater stretching off a hanger. It’s melting toward my ears, sliding off a boxier version of my skull. My face is stretched and pink in the center, wan and blubbery around the edges. My lips look fatter, possibly because of the deep smile creases framing my upper lip. I don’t smile a lot, I think. Thank god."),
      m("p", "But the image is hard to dismiss, and pictures of my grandmother confirm the same aging patterns. In a photograph of her at 90, her face has the same deep creases and sunken features it does now, but her skin seems thicker and more fitted to her bones."),
      m("p", "I see her twice a week to bring her groceries, but I also hired a Filipino girl named Ella to check in on her. Ella Bella, my grandmother calls her. We’d tried professional health aides, but my grandmother kept locking them out, complaining that they were boring and condescending. Ella is working out though, so I won’t have to worry when I move."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  },
  function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "20 October 2012", m("br"),
          "Report from the Central Carribbean:", m("br"),
          "60% chance of tropical cyclone formation within 48 hours.")),
      m("p", "message from havefunmydear to bonuspig"),
      m("p", "Aren't names such a weird thing? It took me a week to name my fish."),
      m("p", "havefunmydear wants to get her Master’s in Public Health and fight for a world with fewer people in it. “I never was interested in public health until I went to Nepal,” she writes. “Women there were baffled to see a 24 year old woman without any kids and treated me as if I was a sorceress with all knowing knowledge of how not to have babies and they wanted in.”"),
      m("p", "I like that I don’t know her name. I can see us keeping in touch."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  },
  function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "27 October 2012", m("br"),
          "NJ. Cloudy, 65º. Barometric pressure 29.99. ", m("br"),
          "2 days until Hurricane Sandy.")),

      m("p", "Ella calls. She says my grandmother opened the door from her knees today, that she’d crawled to answer the doorbell. I drive down to find them in the living room, talking like it’s any other day. My grandmother remembers nothing and asks me if I’m hungry."),
      m("p", "Out of earshot, I tell Ella that I’ll figure something out soon. I know it looks weird that my grandmother still lives alone, but it had been so hard to draw a line. It’s not like she’d fallen before or left the stove on. When aging is that gradual, it’s imperceptible."),
      m("p", "message from havefunmydear to bonuspig:"),
      m("p", "Sometimes I feel like you are my imaginary friend. I've never seen you and I don't know what your voice sounds like or what you're like in real life, yet I tell you all of these things about myself and have long one-sided conversations and find myself sitting on trains thinking of things I want to remember to tell you."),
      m("p", "I have to say I kind of like the prospects of this hurricane."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  },
  function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "28 October 2012", m("br"),
          "Barometric pressure 29.62 and dropping.")),

      m("p", "message from bonuspig to havefunmydear:"),
      m("p", "Until we started talking, I mostly thought about the changing weather and how I could move to Los Angeles. Then the house started progressing and talking to you is exciting and I'm content to be where I am. But I still think about trying LA at some point. It was 84 degrees there today and that makes me sad."),
      m("p", "The other thing on my mind is my grandmother. Today when I went to her house, she was on the floor in the bathroom and she couldn't get up. I'm not sure how long she was down there. So I picked her up and went to make her soup and she fell again. There was a uriney-ammonia smell on her and I was hoping my mom would stay with her, but my mom doesn't like to drive or take the cat anywhere. My hands smelled like ammonia when I got home."),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave")
    );
  },

  function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "It is the twenty-ninth of October, two thousand and twelve."),
        m("p", "It is raining and sixty-three degrees."),
        m("p", "It is a full moon."),
        m("p", "The winds blow east at forty-four miles per hour, gusting to sixty-eight."),
        m("p", "The barometric pressure is twenty-eight point five five.")),
      m("button", {
        onclick: function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          lastwinter.counter = m.prop(lastwinter.counter() + 1);
        }
      }, "leave"));
  },

  function() {
    return m("div", {
        class: "lastwinter"
      },
      m("div", {
          class: "stats"
        },
        m("p", "30 October 2012", m("br"),
          "Light rain, 55º")),

      m("p", "My grandmother’s eyes are open when I find her. They blink at me as I step into her bedroom. “Oh, Jon,” she says from the floor. Her voice is coarse and dry, and her ankle is caught under her thigh."),
      m("p", "“Hey Grandma.” I stand over her for a moment. “How’re you doing?”"),
      m("p", "She says something about five men who did this to her. I lift her carefully into bed and get her some water from the kitchen, holding her up so she can drink. All the doors are bolted and nothing is out of place, though her power is out and there’s no heat."),
      m("p", "She says she needs to go to the bathroom. I bring her walker nearby and help her cross the hall. When she’s done, she can’t stand up again, so I lift her off the toilet while looking away. She can’t raise her knees, so I have to swing her feet into bed and then pull her up by her arms. What happened, she keeps asking. There was a hurricane, I explain. You fell."),
      m("br"),
      m("br"),
      m("a[href='/#/']", "go home", {
        config: m.route
      })
    );
  }
];
