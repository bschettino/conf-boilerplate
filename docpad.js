bruno = {
          name: "Bruno Schettino",
          photo: "themes/yellow-swan/img/schett.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          company: "STI",
          link: {
            href: "https://twitter.com/bschettino",
            text: "@bschettino"
          }
        }
igor = {
          name: "Igor Barbosa",
          photo: "themes/yellow-swan/img/igor.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          company: "STI",
          link: {
            href: "http://twitter.com/igorb",
            text: "@igorb"
          }
        }
marcos = { 
          name: "Marcos Rodrigues",
          photo: "themes/yellow-swan/img/marcos.jpg",
          bio: "É o cara!!!",
          company: "STI",
          link: {
            href: "https://github.com/mrodrigues",
            text: "@mrodrigues"
          }
        }
rodrigo = {
            name: "Rodrigo Castro",
            photo: "themes/yellow-swan/img/rod.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            company: "Delta Command",
            link: {
              href: "https://twitter.com/rodonrails",
              text: "@rodonrails"
            }
          }
rennan = {
          name: "Rennan Oliveira",
          photo: "themes/yellow-swan/img/rennan.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          company: "Apple, Inc.",
          link: {
            href: "https://twitter.com/renmcoliver",
            text: "@renmcoliver"
          } 
        }

ururay = {
          name: "Thiago Ururay",
          photo: "themes/yellow-swan/img/ururay.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          company: "Apple, Inc.",
          link: {
            href: "https://www.facebook.com/thiago.ururay",
            text: "@thiago.ururay"
          } 
        }

luis = {
          name: "Luis Vasconcellos",
          photo: "themes/yellow-swan/img/luis.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          company: "Apple, Inc.",
          link: {
            href: "https://github.com/vasconcelloslf",
            text: "@vasconcelloslf"
          } 
        }  

coffee = {
          name: "",
          photo: "themes/yellow-swan/img/coffeeBreak2.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          company: "Apple, Inc."
          // link: {
          //   href: "https://github.com/vasconcelloslf",
          //   text: "@vasconcelloslf"
          // } 
        }               

module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "STI Dev meeting",
      description: "O Dev Meeting, é uma reunião dos desenvolvedores da STI-UFF pra palestrar, debater sobre tecnologias e etc. Então convidem amigos que possam se interessar, pois o evento é aberto também para quem não é da STI!",
      date: "29 de Abril",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "Instituto de Computação, sala 317",
      address: "Campus da Praia Vermelha, Rua Passo da Pátria, 156, São Domingos",
      city: "Niterói",
      state: "Rio de Janeiro"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    // callToAction: {
    //     text: "Register now!",
    //     link: "http://eventick.com.br"
    // },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/bschettino/conf-boilerplate"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://bschettino.github.io/conf-boilerplate/",
      googleanalytics: "UA-62307014-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'files',
      'evaluation',
      'photos',
      'sponsors',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Apresentações",
      files: "Arquivos",
      evaluation: "Avaliação",
      photos: "Fotos",
      sponsors: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        speakers: [marcos],
        presentation: {
          title: "Programação funcional: uma viagem de Haskell à JavaScript",
          description: "Higher-order functions, pattern matching, laziness, listas infinitas, currying, monads. Dá pra usar no mundo real? Em JavaScript? Não conhece metade desses termos? Assista à essa palestra e descubra como incorporar técnicas de programação funcional em seu código JavaScript, com base em exemplos em Haskell!",
          time: "15h00"
        }
      },
      {
        speakers: [coffee],
        presentation: {
          title: "Coffee Break",
          description: "",
          time: "16h00"
        }
      },

      {
        speakers: [ururay],
        presentation: {
          title: "Já pensou em fazer seu blog estático?",
          description: "O que dizer desse generator que mal conheço e já considero pacas? Entenda como o Jekyll pode facilitar o desenvolvimento do seu blog usando truques que você já conhece. Sim, é magia!",
          time: "16h30"
        }
      }

    ],

    // List of Sponsors
    sponsors: [
      {
        name: "STI-UFF",
        logo: "themes/yellow-swan/img/sti2.png",
        url: "http://www.sti.uff.br/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    galleries: [
      {
        name: "1",
        link: "http://s1068.photobucket.com/user/uffdevmeeting/embed/slideshow/Dev%20Meetings/1st%20Dev%20Meeting"
      },
      {
        name: "2",
        link: "http://s1068.photobucket.com/user/uffdevmeeting/embed/slideshow/Dev%20Meetings/2nd%20Dev%20Meeting"
      },
      {
        name: "3",
        link: "http://s1068.photobucket.com/user/uffdevmeeting/embed/slideshow/Dev%20Meetings/3rd%20Dev%20Meeting"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};