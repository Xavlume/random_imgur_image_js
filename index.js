// Edited from https://stackoverflow.com/a/1349426
function get_random_imgur_link(){
    const result = 'https://i.imgur.com/';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result + ".png";
}

let is_redirect = false

async function check_if_redirect(file) {
  let myObject = await fetch(file);
  is_redirect = myObject.redirected;
}

async function display_random_imgur_image() {
  const the_link = get_random_imgur_link();
  await check_if_redirect(the_link)
  if (is_redirect){
    display_random_imgur_image()
  }
  else{
    document.getElementById("the-img").src = the_link;
    document.title = the_link;
  }
}

document.onclick = display_random_imgur_image