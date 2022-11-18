let role = ["Front End Developer", "Digital Marketing"]
let increment = 1
setInterval(()=>{
let roleTarget = document.getElementById("role")
if(increment % 2 == 0){
  roleTarget.textContent = role[1]
}else{
  roleTarget.textContent = role[0]
}
increment = increment + 1
}, 2000)


new Vue({
    el: '#app',
    data: {
      html: 80,
      css: 80,
      sass: 70,
      jsc: 80,
      squarespace: 70,
      wordpress: 80,
      wix: 70,
      meteor: 70,
      handlebars: 80,
      react: 70,
      axure: 80,
      balsamiq: 70,
      photoshop: 80,
      illustrator: 50,
      seo: 80,
      cmarketing:80,
      htmlemail:70,
      audacity: 70,
      powerpoint: 80,
      gsheet: 80,
      gform: 80
    }
  });
  