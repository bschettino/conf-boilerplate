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
          name: "Marcos Còrtes",
          photo: "themes/yellow-swan/img/marcos.jpg",
          bio: "É o cara!!!",
          company: "STI"
          // link: {
          //   href: "https://www.facebook.com/profile.php?id=1302781122",
          //   text: "Marcos Còrtes"
          // }
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
module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "STI Dev meeting",
      description: "O Dev Meeting, é uma reunião dos desenvolvedores da STI-UFF pra palestrar, debater sobre tecnologias e etc. Então convidem amigos que possam se interessar, o evento é aberto também para quem não é da STI!",
      date: "25 de Março",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "Instituto de Computação, sala 308",
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
      url: "http://bschettino.github.io/conf-boilerplate/"
      // googleanalytics: "UA-33656081-1"
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
      'sponsors',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestras",
      files: "Arquivos",
      evaluation: "Avaliação",
      sponsors: "Patrocínio",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        speakers: [marcos],
        presentation: {
          title: "Criação de módulos Java",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h00"
        }
      },
      {
        speakers: [bruno, igor],
        presentation: {
          title: "Tropical Ruby Experience",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h30"
        }
      },
      {
        speakers: [rodrigo],
        presentation: {
          title: "Usabilidade na web",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h20"
        }
      },
      { speakers: [igor, rennan],
        presentation: {
          title: "Web Support Tools for Open Source",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h50"
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