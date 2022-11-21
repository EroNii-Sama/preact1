import './style';
import './css/banner.css';
import './css/cursos.css';
import './css/cursosCategoria.css';
import './css/footer.css';
import './css/header.css';
import './css/login.css';
import './css/register.css';
import './css/teachersHiring.css';
export default function App() {
	return (
		<main>
      <header>
        <div class="header__container">
          <div class="header__logo">
            <img src="img/udemyLogo.png" alt="logo" />
          </div>
          <nav>
            <ul class="header__menu__horizontal">
              <li>
                <a class="header__menu__horizontal__tittle" href="#"
                  >Categorias</a
                >
                <ul class="header__menu__vertical">
                  <li><a href="#">Diseño</a></li>
                  <li><a href="#">Desarrollo</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Informatica y software</a></li>
                  <li><a href="#">Desarrollo personal</a></li>
                  <li><a href="#">Negocios</a></li>
                  <li><a href="#">Fotografia</a></li>
                  <li><a href="#">Musica</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="header__login">
            <a class="header__login__log" href="login.html">Iniciar sesión</a>
            <a class="header__login__reg" href="register.html">Registrate</a>
          </div>
        </div>
      </header>
      <div class="banner__container">
        <img src="img/studentsCampus.jpg" alt="studentsCampus" />
        <h1>Una amplia seleccion de cursos</h1>
        <p>
          Elige entre más de 204.000 cursos de vídeo en línea con nuevo
          contenido cada mes
        </p>
      </div>
      <div class="cursos__tittleContainer">
        <h1>Cursos</h1>
      </div>
      <div class="cursos__container">
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Python</h1>
              <p>Nivel: Facil</p>
              <p>
                Aprende a programar con Python, el lenguaje de programación más
                popular del mundo
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>C#</h1>
              <p>Nivel: Medio</p>
              <p>
                Aprende a programar con C#, el lenguaje de programación más
                usado del mundo
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>fotografia</h1>
              <p>Nivel: Facil</p>
              <p>
                Aprende a tomar fotografias profesionales con tu camara digital
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Mariscos</h1>
              <p>Nivel: Facil</p>
              <p>Aprende a cocinar mariscos de la manera mas facil y rapida</p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Adobe After Effects</h1>
              <p>Nivel: Medio</p>
              <p>
                Aprende a editar videos con Adobe After Effects, el programa de
                edicion mas usado del mundo
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>HTML</h1>
              <p>Nivel: Facil</p>
              <p>
                Aprende a crear paginas web con HTML, el lenguaje de
                programacion mas usado para crear paginas web
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>CSS</h1>
              <p>Nivel: Medio</p>
              <p>
                Aprende a darle estilo a tus paginas web con CSS, el lenguaje de
                programacion mas usado para darle estilo a las paginas web
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>CSS: Responsive Design</h1>
              <p>Nivel: Medio</p>
              <p>Aprende a crear paginas web responsive con CSS.</p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Planos de Residencias</h1>
              <p>Nivel: Dificil</p>
              <p>
                Aprende a hacer planos de residencias de la manera mas facil y
                rapida
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Video Juegos con Unity</h1>
              <p>Nivel: Dificil</p>
              <p>
                Aprende a crear video juegos con Unity, el programa de creacion
                de video juegos mas usado del mundo
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Unreal Engine 5</h1>
              <p>Nivel: Dificil</p>
              <p>
                Aprende a crear video juegos con Unreal Engine 5, el programa de
                creacion de video juegos mas potente del mundo
              </p>
            </div>
          </div>
        </div>
        <div class="cursos__flip__card">
          <div class="cursos__flip__card__inner">
            <div class="cursos__flip__card__front">
              <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
            </div>
            <div class="cursos__flip__card__back">
              <h1>Reposteria</h1>
              <p>Nivel: Facil</p>
              <p>
                Aprende a hacer pasteles, galletas, cupcakes, etc. de la manera
                mas facil y rapida
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cursosCategorias__tittleContainer">
        <h1>Categorias</h1>
      </div>
      <div class="cursosCategorias__container">
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/diseño.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Diseño</h1>
            </div>
          </div>
          <h2>Diseño</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/desarrollo.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Desarrollo</h1>
            </div>
          </div>
          <h2>Desarrollo</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/marketing.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Marketing</h1>
            </div>
          </div>
          <h2>Marketing</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/informatica_y_software.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Informatica y software</h1>
            </div>
          </div>
          <h2>Informatica y software</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/desarrollo_personal.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Desarrollo personal</h1>
            </div>
          </div>
          <h2>Desarrollo personal</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/negocios.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Negocios</h1>
            </div>
          </div>
          <h2>Negocios</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/fotografia.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Fotografia</h1>
            </div>
          </div>
          <h2>Fotografia</h2>
        </div>
        <div class="cursosCategorias__flip__card">
          <div class="cursosCategorias__flip__card__inner">
            <div class="cursosCategorias__flip__card__front">
              <img src="img/musica.jpg" alt="udemySmallLogo" />
            </div>
            <div class="cursosCategorias__flip__card__back">
              <h1>Musica</h1>
            </div>
          </div>
          <h2>Musica</h2>
        </div>
      </div>
      <div class="teachersHiring__container">
        <img src="img/teacher.jpg" alt="teacher" />
        <div class="teachersHiring__recruitment">
          <h1>Conviértete en instructor</h1>
          <p>
            Instructores de todo el mundo enseñan a millones de estudiantes en
            Udemy. Proporcionamos las herramientas y las habilidades para que
            enseñes lo que te apasiona.
          </p>
          <input type="submit" value="Empieza a enseñar hoy mismo" />
        </div>
        <div></div>
      </div>
      <footer>
        <div class="footer__container">
          <img src="img/udemySmallLogo.png" alt="udemySmallLogo" />
          <h3>Udemy |</h3>
          <h4>Developed by EroNii-Sama</h4>
        </div>
      </footer>
    </main>
	);
}
