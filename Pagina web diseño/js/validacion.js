<script> 
function Login(){ 
var done=0; 
var Usuario=document.login.Usuario.value; 
var Clave=document.login.Clave.value; 
if (Usuario=="pablo" && Clave=="hometech") { 
window.location="Cliente.html"; 
} 
if (Usuario=="" && Clave=="") { 
window.location="errorpopup.html"; 
} 
} 
        </script>
            <script> 
<!-- Begin 
document.oncontextmenu = function(){return false} 
// End --> 
</script>