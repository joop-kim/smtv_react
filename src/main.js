/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import "./assets/css/theme.min.css";
import "./assets/fonts/boxicons/css/boxicons.css";
import "./assets/vendor/node_modules/css/aos.css";
import "./assets/fonts/iconsmind/iconsmind.css";
import "./assets/vendor/masterslider/style/masterslider.css";
import "./assets/vendor/masterslider/skins/black-1/style.css";
import "./assets/vendor/node_modules/css/swiper-bundle.min.css";
import Carousel from 'react-bootstrap/Carousel';
//import * as theme_bundle from "./assets/js/theme.bundle";
//import * as "./assets/vendor/node_modules/js/jquery.min";
//import * as masterslider from "./assets/vendor/masterslider/masterslider";




// 상단 메뉴 변경 부분
const menus = [
  {id:1, menu_link:"main", menu_text:"HOME"},
  {id:2, menu_link:"ir", menu_text:"투자유치 서비스"},
  {id:3, menu_link:"accounting", menu_text:"세무회계 서비스"},
  {id:4, menu_link:"dmarketing", menu_text:"디지털마케팅 서비스"}
];

//OurCustomer 데이터
const customers = [
  {id:1, name:"CJ", logo_url:"cj.jpg"},
  {id:2, name:"SK Hynix", logo_url:"SK_Hynix.png"},
  {id:3, name:"Samsung c-lab", logo_url:"c-lab.jpg"},
  {id:4, name:"Hyundai", logo_url:"hyundai.jpg"},
  {id:5, name:"서울핀테크랩", logo_url:"logo1.png"},
  {id:6, name:"한국콘텐츠진흥원", logo_url:"logo2.png"},
  {id:7, name:"예술경영지원센터", logo_url:"logo3.png"},
  {id:8, name:"한국문화정보원", logo_url:"logo4.jpg"},
  {id:9, name:"경기창조경제혁신센터", logo_url:"logo5.png"},
  {id:10, name:"경북창조경제혁신센터", logo_url:"logo6.jpg"},
  {id:11, name:"", logo_url:"logo7.jfif"},
  {id:12, name:"충남창조경제혁신센터", logo_url:"logo8.png"},
  {id:13, name:"부산정보산업진흥원", logo_url:"logo9.png"}
];

function Navs(props) {
  const ms = []
  for (let i=0;i<props.menus.length;i++) {
    let menu = props.menus[i];
    ms.push(
      <li className="nav-item dropdown" key={menu.id}>
        <a className="nav-link" href={menu.menu_link}>
          {menu.menu_text}
        </a>
      </li>
    )
  }
  return (
    <div className="collapse navbar-collapse" id="mainNavbarTheme">
    <ul className="navbar-nav ms-auto me-5">
      {ms}
    </ul>
  </div>
  );
}

function Header(props) {
  console.log("props", props);
  return (
    <header id="heaer" className="header-transparent sticky-fixed">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbar-link-white">
        <div className="navbar-fixed-bg position-absolute"></div>
        <div className="container position-relative z-index-1">
          <a className="av-item me-3 ms-lg-2 me-lg-0" href="index.html">
            <img
              src="./assets/img/logo_gu.png"
              width="110"
              alt=""
              className="img-fluid navbar-brand-sticky"
            />
          </a>
          <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
            <button
              className="navbar-toggler order-last"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbarTheme"
              aria-controls="mainNavbarTheme"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i></i>
              </span>
            </button>
            <div className="nav-item me-3 ms-lg-2 me-lg-0 ms-2">
              <a href="contact.html" className="btn btn-success btn-sm">
                상담하기
              </a>
            </div>
          </div>
          <Navs menus={menus}></Navs>
        </div>
      </nav>
    </header>
  );
}

function Mainslider() {
  return (
    <section className="bg-dark text-white position-relative overflow-hidden">
          {newFunction()}
    </section>  
  );

  function newFunction() {
    return (
    <Carousel>
      <Carousel.Item>
      <div className="bg-dark">
        <img className="img-fluid" alt="" title="" src="./assets/img/smtv/gv_index_banner_1.jpg" />
        <div className="text-white">
          <div className="text-center display-5 ms-4 me-4">대한민국 스타트업 성장 파트너</div>
          <div className="text-center display-1 ms-4 me-4">그라운드업 벤처스</div>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
    );  
  }
}

function Secondslider() {
  return (
    <section id="2nd" className="position-relative overflow-hidden">
      <div className="container py-9 py-lg-11 position-relative z-index-1">
        <div className="row align-items-center justify-content-between">
          <div className="order-first col-lg-7">
            <div className="mb-3">
              <span className="h6 text-muted">&nbsp;</span>
            </div>
            <h2 className="mb-7 display-6 position-relative z-index-1">
              초기 창업 기업의
              <br /> 지속적인 성장과 생존을 돕습니다.
            </h2>
            <div className="position-relative z-index-1">
              <div className="d-flex mb-4 mb-lg-5 row">
                <div className="fs-5 mb-4">
                  스타트업은 세상을 혁신 시키며 비즈니스 생태계의 중심이
                  되어가고 있습니다.
                  <br />
                  우리는 다양한 어려움을 겪는 초기 기업을 위한 성장 솔루션을
                  제공하고, <br />
                  과정을 함게하는 건강한 성장의 동반자가 되고자 합니다.
                  <br />
                </div>
                <div className="fs-5 mb-4">
                  데이터 기반 기술, 진정성 있는 전문가 그리고 투자자가 어우러져
                  <br />
                  초기 기업의 성장에 핵심요소인 사업과 사람의 성장에 관한 문제를
                  해결합니다.
                  <br />
                </div>
                <div className="fs-5 mb-4">
                  그리운드업벤처스는 창업자들이 <br />
                  사업의 과정속에서 꿇기 어려운 난관을 만났을 때<br />
                  가장 먼저 떠올리는 회사가 되기를 꿈꿉니다.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-10 me-lg-auto order-1 mb-7 mb-lg-0">
            <div className="position-relative text-end">
              <div className="">
                <img
                  src="./assets/img/smtv/gv_index_img_rocket.jpg"
                  alt=""
                  className="img-fluid position-relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white position-relative">
      <div className="container pt-3 pt-lg-5">
        <div className="row mb-5">
          <div className="col-md-12 col-lg-4 mb-5 h-100 me-auto">
            <h2 className="display-8 mb-0 position-relative">
              Ground up Ventures
            </h2>
            <div className="pt-3">
              <a className="fs-7" href="mailto:mail@doamin.com">
                contact@ground-up.kr
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-lg-8 mb-5 mb-md-0 ms-auto h-100">
            <p className="mb-0 text-muted font-weight-light">
              그라운드업벤처스 주식회사 (대표: 이호재)
              <br />
              서울특별시 강남구 논현로 319 2층 (역삼동 정유빌딩)
              <br />
              대표번호 : 02-6959-4205
              <br />
              사업자등록번호 : 720-87-00861
              <br />
              개인정보 처리방침
              <br />
            </p>
          </div>
        </div>
        <hr className="mb-5 mt-0" />
      </div>
      <div className="pb-5">
        <div className="container">
          <div className="row justify-content-md-between align-items-center">
            <div className="d-flex mb-3 mb-md-0 col-sm-6 col-md-4">
              <a
                href="#!"
                className="d-inline-block mb-1 me-2 si rounded-pill si-hover-facebook"
              >
                <i className="bx bxl-facebook fs-5"></i>
                <i className="bx bxl-facebook fs-5"></i>
              </a>
              <a
                href="#!"
                className="d-inline-block mb-1 me-2 si rounded-pill si-hover-twitter"
              >
                <i className="bx bxl-twitter fs-5"></i>
                <i className="bx bxl-twitter fs-5"></i>
              </a>
              <a
                href="#!"
                className="d-inline-block mb-1 me-2 si rounded-pill si-hover-linkedin"
              >
                <i className="bx bxl-linkedin fs-5"></i>
                <i className="bx bxl-linkedin fs-5"></i>
              </a>
              <a
                href="#!"
                className="d-inline-block mb-1 si rounded-pill si-hover-instagram"
              >
                <i className="bx bxl-instagram fs-5"></i>
                <i className="bx bxl-instagram fs-5"></i>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 text-sm-end">
              <span className="d-block lh-sm small text-muted">
                © GROUND UP VENTURES. ALL RIGHTS RESERVED.
                <script>document.write(new Date().getFullYear());</script>.
                Assan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Thirdslider() {
  return (
    <section
      id="features"
      className="overflow-hidden position-relative bg-light"
    >
      <div className="py-9 py-lg-11 container">
        <div className="row mb-7 align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="display-5 mb-0" data-aos-delay="100">
              Ground Up Ventures
            </h2>
          </div>
          <div className="col-md-5 offset-lg-1">
            <p className="mb-0" data-aos-delay="150">
              &nbsp;
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-4 mb-4" data-aos-delay="100">
            <div className="card p-4 rounded-4 rounded-top-end-0 rounded-bottom-start-0 hover-lift hover-shadow-xl">
              <div className="position-relative flex-center mb-4">
                <img
                  src="./assets/img/smtv/gv_icons-1_startup ir service.jpg"
                  alt=""
                  className="img-fluid position-relative"
                />
              </div>
              <div className="mb-2">
                <h5 className="mb-0">스타트업 투자유치 서비스</h5>
              </div>
              <p className="mb-0">
                그라운드업은 실제 투자자의 시각으로 원스톱 IR 솔루션을
                제공합니다.
              </p>
              <div className="pe-7 pt-3 pe-lg-7">
                <ul className="list-unstyled mb-7 flex-grow-1">
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>IR 코칭 서비스</span>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>DECK 디자인 서비스</span>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>투자자 네트워킹 서비스</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <span className="me-md-4 mb-3 mb-md-0 align-items-center">
                  <a href="ir.html" className="btn btn-primary">
                    More..
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4" data-aos-delay="150">
            <div className="card p-4 rounded-4 rounded-top-end-0 rounded-bottom-start-0 hover-lift hover-shadow-xl">
              <div className="position-relative flex-center mb-4">
                <img
                  src="./assets/img/smtv/gv_icons-2_finance service.jpg"
                  alt=""
                  className="img-fluid position-relative"
                />
              </div>
              <div className="mb-2">
                <h5 className="mb-0">세무/회계 서비스</h5>
              </div>
              <p className="mb-0">
                스타트업의 복잡하고 번거로운 세무회계 문제를 손쉽게 해결할 수
                있는 차별화된 솔루션을 제공합니다.
              </p>
              <div className="pe-7 pt-3 pe-lg-7">
                <ul className="list-unstyled mb-7 flex-grow-1">
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>스타트업 절세 관리</span>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>스타트업 인건비 관리</span>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>AI인공지능 재무 비서 서비스</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <span className="me-md-4 mb-3 mb-md-0 align-items-center">
                  <a href="Accounting.html" className="btn btn-primary">
                    More..
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4 mb-md-0" data-aos-delay="200">
            <div className="card p-4 rounded-4 rounded-top-end-0 rounded-bottom-start-0 hover-lift hover-shadow-xl">
              <div className="position-relative flex-center mb-4">
                <img
                  src="./assets/img/smtv/gv_icons-3_digital marketing service.jpg"
                  alt=""
                  className="img-fluid position-relative"
                />
              </div>
              <div className="mb-2">
                <h5 className="mb-0">디지털 마케팅 서비스</h5>
              </div>
              <p className="mb-0">
                비즈니스의 실질적인 성장을 견인하는 그라운드업의 그로스해킹
                서비스를 만나보세요.
              </p>
              <div className="pe-7 pt-3 pe-lg-7">
                <ul className="list-unstyled mb-7 flex-grow-1">
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>그로스 컨설팅 서비스</span>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>그로스 데이터 서비스</span>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <i className="me-2 fs-4 bx bx-check lh-sm text-muted"></i>
                    <span>그로스 캠페인 서비스</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <span className="me-md-4 mb-3 mb-md-0 align-items-center">
                  <a href="growthhacking.html" className="btn btn-primary">
                    More..
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Ourcustomer() {
  const cust_list = [];
  for (let c=0;c<customers.length;c++){
    let cust = customers[c];
    cust_list.push(
      <div className="col" key={cust.id}>
        <div className="d-flex align-items-center justify-content-center my-4">
          <img
            src={"./assets/img/logo/"+cust.logo_url}
            alt={cust.name}
            className="img-fluid image-1"
          />
        </div>
      </div>
    );
  }
  return (
    <section id="outcust" className="position-relative bg-white overflow-hidden">
      <div className="container pt-9 pt-lg-11 position-relative z-index-1">
        <div className="mb-7 w-lg-60 mx-auto text-center">
          <div className="mb-3" data-aos data-aos-once="false">
            <h2 className="display-3 splitting-down" data-splitting>
              Our Customer
            </h2>
          </div>
          <p className="mb-0 lead">
            There are combined alignment methods – when several types of
            alignment together are used in one composition.
          </p>

          <div className="mx-auto width-8x pt-1 bg-primary mt-4"></div>
        </div>
        <div className="row mb-7 mb-lg-11 row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          {cust_list}
        </div>
      </div>
    </section>
  );
}

function Gunews() {
  return (
    <section className="position-relative bg-light overflow-hidden">
      <div className="container py-9 py-lg-11 position-relative">
        <div className="row mb-7 align-items-end justify-content-between">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="mb-0 display-4">그라운드업 뉴스</h2>
          </div>
          <div className="col-12 col-lg-3 text-lg-end">
            <a
              href="https://blog.naver.com/thepitchkorea"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-secondary btn-hover-arrow hover-lift"
            >
              <span>Our Blog</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <article className="card card-hover text-center hover-shadow-lg overflow-hidden border-0 rounded-3">
              <div className="overflow-hidden position-relative">
                <img
                  src="./assets/img/news01.jpg"
                  alt=""
                  className="img-fluid img-zoom"
                />
                <svg
                  className="position-absolute start-0 bottom-0 mb-n1 text-white"
                  preserveAspectRatio="none"
                  width="100%"
                  height="48"
                  viewBox="0 0 1460 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M122 22.8261L0 0V120H1460V0L1338 22.8261C1217 44.1304 973 88.2609 730 88.2609C487 88.2609 243 44.1304 122 22.8261Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="card-body pb-5 position-relative">
                <small className="text-muted">
                  <i className="bx bx-calendar-alt me-1"></i> 2022/07/05
                </small>
                <h5 className="py-3 mb-0">
                  [한국문화정보원X그라운드업벤처스]
                  <br /> '2022년 공공키움 사업'운영 위탁 선정
                </h5>
              </div>
            </article>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <article className="card card-hover text-center hover-shadow-lg overflow-hidden border-0 rounded-3">
              <div className="overflow-hidden position-relative">
                <img
                  src="./assets/img/news02.jpg"
                  alt=""
                  className="img-fluid img-zoom"
                />
                <svg
                  className="position-absolute mb-n1 start-0 bottom-0 text-white"
                  preserveAspectRatio="none"
                  width="100%"
                  height="48"
                  viewBox="0 0 1460 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M122 22.8261L0 0V120H1460V0L1338 22.8261C1217 44.1304 973 88.2609 730 88.2609C487 88.2609 243 44.1304 122 22.8261Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="card-body pb-5 position-relative">
                <small className="text-muted">
                  <i className="bx bx-calendar-alt me-1"></i> 2022/05/30
                </small>
                <h5 className="py-3 mb-0">
                  '서울핀테크랩' 운영 위탁 기업으로
                  <br />
                  그라운드업벤처스 선정
                </h5>
              </div>
            </article>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <article className="card card-hover text-center hover-shadow-lg overflow-hidden border-0 rounded-3">
              <div className="overflow-hidden position-relative">
                <img
                  src="./assets/img/news03.jpg"
                  alt=""
                  className="img-fluid img-zoom"
                />
                <svg
                  className="position-absolute start-0 bottom-0 mb-n1 text-white"
                  preserveAspectRatio="none"
                  width="100%"
                  height="48"
                  viewBox="0 0 1460 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M122 22.8261L0 0V120H1460V0L1338 22.8261C1217 44.1304 973 88.2609 730 88.2609C487 88.2609 243 44.1304 122 22.8261Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="card-body pb-5 position-relative">
                <small className="text-muted">
                  <i className="bx bx-calendar-alt me-1"></i>2022/01/04
                </small>
                <h5 className="py-3 mb-0">
                  더피치가 그라운드업 벤처스로 사명을 바꾸고
                  <br />
                  스타트업 부스팅 종합 플랫폼으로 진화
                </h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>

      <Header></Header>
      <main>
        <Mainslider></Mainslider>
        <Secondslider></Secondslider>
        <Thirdslider></Thirdslider>
        <Ourcustomer></Ourcustomer>
        <Gunews></Gunews>
        <Footer></Footer>
      </main>
    </>
  );
}
//theme_bundle.i();

//var slider = masterslider;
//slider.setup('masterslider', {
//  width: 1140,
// height: 660,
//  minHeight: 400,
//  space: 0,
//  start: 1,
//  grabCursor: false,
//  layout: "fullwidth",
//  wheel: false,
//  autoplay: true,
//  instantStartLayers: true,
//  loop: true,
//  view: "basic"
//});
//slider.control('arrows');

export default App;
