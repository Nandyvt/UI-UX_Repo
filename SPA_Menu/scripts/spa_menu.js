// Adding Namespaces

var spaApp = (function() {

//Private varibles
  const contentDiv = document.getElementById("content");
  const HTMLContent =`
  <div class="className">
      <div>Demo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
  `;

  const partials = {
    home: "This is the Home page.",
    contact: "This is the Contact page.",
    ui_ux: "This is ui-ux team page.",
    logout:(HTMLContent)
  };




  if(!location.hash) {
    location.hash = "#home";
  }


//Public methods

    return {
        setActiveLink: function(fragmentId) {
          var navbarDiv = document.getElementById("navbar"),
              links = navbarDiv.children,
              i, link, pageName;
          for(i = 0; i < links.length; i++){
            link = links[i];
            pageName = link.getAttribute("href").substr(1);
            if(pageName === fragmentId) {
              link.setAttribute("class", "active");
            } else {
              link.removeAttribute("class");
            }
          }
        },

        getContent: function(fragmentId) {
            return partials[fragmentId];
        },

        navigate : function(){
              let fragmentId = location.hash.substr(1);
              contentDiv.innerHTML = spaApp.getContent(fragmentId);
              spaApp.setActiveLink(fragmentId);
        },

        spa_openMenu_section:function(ObjRef){
          ObjRef.classList.toggle("change");
          var menu_selector = document.querySelector(".myLinks");
          if (menu_selector.style.display === "block") {
            menu_selector.style.display = "none";
          } else {
            document.querySelector(".myLinks").classList.add('changeHeight');
            menu_selector.style.display = "block";
          }
        },

        hide_menuItems_click:function(){
          let elementsArray = document.querySelectorAll("#navbar a");

          elementsArray.forEach(function(elem) {
              elem.addEventListener("click", function() {
                  //this function does stuff
                  document.querySelector(".myLinks").style.display = "none";
                  document.querySelector(".container.icon").classList.toggle("change");
              });
          });
        }


    };
})();


window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    spaApp.navigate();
    spaApp.hide_menuItems_click();
});



window.addEventListener("hashchange", spaApp.navigate);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
