header class="header">
        <nav class="nav">
          <img src="./imagen/avatar.png" alt="">  
    
         <ul class="menu">
            <li class="nav1"><a href="https://render.com/" class="menulink "></a>Mision</li>
            <li class="nav1"><a href="#" class="menulink "></a>Catalogo</li>
            <li class="nav1"><a href="#" class="menulink "></a>Contactos</li>
            <li class="nav1"><a href="#" class="menulink "></a>│</li>
            <li class="nav1"><a href="#" class="menulink "></a>Registro</li>
    
         </ul>
        </nav> 
         </header>


body{
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(515deg, rgb(107, 86, 86),white);
   /* background-color: rgb(14, 7, 49);*/
}




.header{
    background-color: rgba(202, 57, 118, 0.74);
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
  }
  .nav{
    display: flex;
    justify-content:space-between;
    max-width: 992;
 }
    
  .nav img{
    width:280px;
    height: 70px;
    padding: 0 40px;
    line-height: 80px;
     }
 
  .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: antiquewhite;
        list-style: none;
        font-size: 20px;
        
  }
 .nav1 {
    margin:20px;
    border-radius: 10px;    
 }
 .nav1:hover{
    background-color: gray;
    color: rgb(90, 29, 29);
 }