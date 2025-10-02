<script>
  let showAdditionalSection1 = false;
  let showAdditionalSection2 = false;
  let showAdditionalSection3 = false;
  let showAdditionalSection4 = false;

  function toggleSection1() {
    showAdditionalSection1 = !showAdditionalSection1;
  }
  function toggleSection2() {
    showAdditionalSection2 = !showAdditionalSection2;
  }
  function toggleSection3() {
    showAdditionalSection3 = !showAdditionalSection3;
  }
  function toggleSection4() {
    showAdditionalSection4 = !showAdditionalSection4;
  }
</script>

<!-- Heading - za nas first one like design -->
<div class="heading">
  <div class="heading-container">
    <div id="h-left">
      <h1>За Нас</h1>
      <p>
        Запознайте се с нашия екип, разберете за нашата история и мисия да
        помагаме на децата да открият себе си.
      </p>
    </div>
    <div id="h-right">
      <svg
        class="first-svg"
        style="top: 0; position:static"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
          ><g transform="scale(0.5,0.5)"
            ><path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            ></path><path
              d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
              fill="#ffac71"
            ></path><path
              d="M303.2,192.6l-27.6,-68.1c-1.3,-3.4 -2.4,-6.1 -3.2,-8.2c-0.8,-2 -1.9,-3.9 -3.1,-5.7c-1.2,-1.8 -2.8,-3.2 -4.8,-4.4c-2,-1.1 -4.5,-1.7 -7.5,-1.7c-2.9,0 -5.4,0.6 -7.4,1.7c-2,1.1 -3.6,2.6 -4.8,4.4c-1.2,1.8 -2.4,4.1 -3.5,6.9c-1.1,2.8 -2,5.1 -2.8,7.1l-27,68.6c-1.1,2.7 -1.9,4.9 -2.4,6.4c-0.5,1.5 -0.7,3 -0.7,4.5c0,2.5 1,4.7 3.1,6.7c2.1,2 4.4,3 7.1,3c3.2,0 5.4,-0.9 6.8,-2.8c1.4,-1.8 3.1,-5.4 5,-10.7l5,-13.5h42.9l5,13.2c0.7,1.6 1.5,3.5 2.4,5.7c0.9,2.1 1.8,3.7 2.6,4.8c0.8,1 1.8,1.9 3,2.4c1.2,0.6 2.6,0.9 4.3,0.9c2.9,0 5.3,-1 7.4,-3.1c2,-2 3.1,-4.3 3.1,-6.7c0.4,-2.5 -0.7,-6.2 -2.9,-11.4zM241.3,170.6l15.6,-43.6l15.9,43.6z"
              fill="#ecedea"
            ></path><path
              d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
              fill="#eb9783"
            ></path><path
              d="M203.4,316.7c10.6,-4.9 15.8,-12.6 15.8,-23.2c0,-3.1 -0.5,-6 -1.5,-8.8c-1,-2.8 -2.5,-5.3 -4.4,-7.6c-1.9,-2.3 -4.1,-4.2 -6.6,-5.7c-2.9,-1.8 -6.2,-3 -9.9,-3.6c-3.7,-0.6 -8.1,-0.9 -13.1,-0.9h-34.2c-4.6,0 -7.9,1 -9.9,3.1c-2,2 -3.1,5.4 -3.1,10v79.4c0,4.6 1,7.9 3,10c2,2.1 5.3,3.1 10,3.1h32.3c5.6,0 10.4,-0.3 14.6,-0.8c4.2,-0.6 7.9,-1.5 11.1,-2.8c5.1,-2.3 9.2,-5.8 12.2,-10.5c3,-4.7 4.5,-10 4.5,-16c0,-12.7 -6.9,-21.3 -20.8,-25.7zM157.9,283h17.4c7.8,0 13.6,0.9 17.4,2.6c3.8,1.8 5.7,5.3 5.7,10.6c0,2.5 -0.6,4.8 -1.8,6.8c-1.5,2.8 -3.8,4.8 -6.7,5.8c-2.9,1 -7,1.5 -12.4,1.5h-19.6zM180.9,356.5h-23v-30.8h22.3c7.4,0 13,1.2 16.8,3.6c3.7,2.4 5.6,6.3 5.6,11.6c0,10.4 -7.3,15.6 -21.7,15.6z"
              fill="#ecedea"
            ></path><g
              ><path
                d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                fill="#edc92f"
              ></path><path
                d="M380.1,337c-1.8,-1.8 -4,-2.7 -6.5,-2.7c-3,0 -5.1,0.9 -6.5,2.6c-1.3,1.8 -2.5,4 -3.4,6.8c-2.2,5.9 -5.4,10.4 -9.6,13.4c-4.2,3 -9.4,4.6 -15.6,4.6c-5.7,0 -10.6,-1.3 -14.8,-4c-4.2,-2.7 -7.5,-6.8 -9.8,-12.2c-2.3,-5.4 -3.5,-12.3 -3.5,-20.5c0,-12.3 2.6,-21.8 7.8,-28.4c5.2,-6.7 12.2,-10 21,-10c5.5,0 10.2,1.3 13.9,3.9c3.8,2.6 7,6.5 9.8,11.7c1.7,3.2 3.2,5.4 4.6,6.7c1.4,1.3 3.4,1.9 6.2,1.9c2.4,0 4.5,-0.9 6.3,-2.8c1.7,-1.9 2.6,-4 2.6,-6.5c0,-4.5 -1.8,-9.2 -5.3,-14.2c-3.6,-5 -8.7,-9.2 -15.3,-12.6c-6.7,-3.4 -14.3,-5.1 -22.8,-5.1c-7,0 -13.6,1.3 -19.8,3.7c-6.2,2.5 -11.6,6.1 -16.2,10.9c-4.6,4.8 -8.1,10.5 -10.6,17.2c-2.5,6.7 -3.7,14.3 -3.7,22.8c0,5.2 0.5,10.2 1.5,14.8c1,4.7 2.5,9 4.4,13.1c2,4.1 4.3,7.8 7.1,11.1c3.1,3.6 6.5,6.6 10.3,8.8c3.7,2.2 7.9,3.9 12.4,4.9c4.6,1.1 9.6,1.6 15.2,1.6c7.3,0 13.8,-1.2 19.3,-3.5c5.5,-2.4 10.1,-5.4 13.6,-9.2c3.6,-3.8 6.2,-7.6 7.8,-11.5c1.7,-3.9 2.5,-7.5 2.5,-10.9c-0.2,-2.4 -1.1,-4.7 -2.9,-6.4z"
                fill="#ecedea"
              ></path></g
            ></g
          ></g
        >
      </svg>
      <svg
        class="second-svg"
        style="right: 0;  display: flex; justify-content: end"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g transform="translate(38.39858,38.39858) scale(0.7,0.7)"
          ><g
            fill="#e2f099"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><path
              d="M127.99528,310.84567c-100.98549,0 -182.8504,-81.86491 -182.8504,-182.8504v0c0,-100.98549 81.86491,-182.8504 182.8504,-182.8504v0c100.98549,0 182.8504,81.86491 182.8504,182.8504v0c0,100.98549 -81.86491,182.8504 -182.8504,182.8504z"
              id="shape"
            ></path></g
          ><g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><g transform="scale(5.12,5.12)"
              ><path
                d="M25,4.0625c-12.58594,0 -22.9375,8.86328 -22.9375,19.9375c0,6.42578 3.5625,12.09375 8.9375,15.71875c-0.00781,0.21484 0,0.54688 -0.28125,1.59375c-0.34766,1.29297 -1.03516,3.125 -2.46875,5.15625l-1.03125,1.4375l1.78125,0.03125c6.17578,0.02734 9.75391,-4.03125 10.3125,-4.6875c1.82422,0.40625 3.72266,0.6875 5.6875,0.6875c12.58203,0 22.9375,-8.86328 22.9375,-19.9375c0,-11.07422 -10.35547,-19.9375 -22.9375,-19.9375zM25,5.9375c11.71484,0 21.0625,8.15234 21.0625,18.0625c0,9.91016 -9.34766,18.0625 -21.0625,18.0625c-2.00391,0 -3.94922,-0.24219 -5.78125,-0.6875l-0.5625,-0.125l-0.375,0.46875c0,0 -2.89062,3.25781 -7.5,4.03125c0.83203,-1.49219 1.46484,-2.87891 1.75,-3.9375c0.39844,-1.48047 0.40625,-2.5 0.40625,-2.5v-0.5l-0.4375,-0.28125c-5.22656,-3.3125 -8.5625,-8.58984 -8.5625,-14.53125c0,-9.91016 9.34375,-18.0625 21.0625,-18.0625z"
              ></path></g
            ></g
          ></g
        >
      </svg>
    </div>
  </div>
</div>

<div class="who-a-w" style="margin-bottom: 1rem;">
  <div class="who-a-w-container">
    <div class="w-left">
      <h2>Кои сме ние</h2>
      <p>
        ОЦ „Логос – Аз и Ти“ е място, в което всяко дете получава шанс да
        открие, развие и изрази своя потенциал. Ние сме екип от специалисти –
        логопеди, ерготерапевти, специални педагози, психолози и терапевти,
        обединени от вярата, че напредъкът започва с връзката между „аз“ и „ти“
        – от една страна - между логопед, дете и родител и от друга страна
        -между надеждата, възможността и подкрепата.
      </p>
    </div>
    <div class="w-right">
      <svg
        class="first-svg-w"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
          ><g transform="scale(0.5,0.5)"
            ><path
              d="M256,7.9c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1c0,-137 -111.1,-248.1 -248.1,-248.1z"
              fill="#feecd3"
            ></path><path
              d="M323,88.1h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.9c0,-4.9 -4,-8.9 -8.9,-8.9z"
              fill="#ffac71"
            ></path><path
              d="M303.2,192.6l-27.6,-68.1c-1.3,-3.4 -2.4,-6.1 -3.2,-8.2c-0.8,-2 -1.9,-3.9 -3.1,-5.7c-1.2,-1.8 -2.8,-3.2 -4.8,-4.4c-2,-1.1 -4.5,-1.7 -7.5,-1.7c-2.9,0 -5.4,0.6 -7.4,1.7c-2,1.1 -3.6,2.6 -4.8,4.4c-1.2,1.8 -2.4,4.1 -3.5,6.9c-1.1,2.8 -2,5.1 -2.8,7.1l-27,68.6c-1.1,2.7 -1.9,4.9 -2.4,6.4c-0.5,1.5 -0.7,3 -0.7,4.5c0,2.5 1,4.7 3.1,6.7c2.1,2 4.4,3 7.1,3c3.2,0 5.4,-0.9 6.8,-2.8c1.4,-1.8 3.1,-5.4 5,-10.7l5,-13.5h42.9l5,13.2c0.7,1.6 1.5,3.5 2.4,5.7c0.9,2.1 1.8,3.7 2.6,4.8c0.8,1 1.8,1.9 3,2.4c1.2,0.6 2.6,0.9 4.3,0.9c2.9,0 5.3,-1 7.4,-3.1c2,-2 3.1,-4.3 3.1,-6.7c0.4,-2.5 -0.7,-6.2 -2.9,-11.4zM241.3,170.6l15.6,-43.6l15.9,43.6z"
              fill="#ecedea"
            ></path><path
              d="M243.6,245.5h-133c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0.1,-5 -3.9,-9 -8.8,-9z"
              fill="#eb9783"
            ></path><path
              d="M203.4,316.7c10.6,-4.9 15.8,-12.6 15.8,-23.2c0,-3.1 -0.5,-6 -1.5,-8.8c-1,-2.8 -2.5,-5.3 -4.4,-7.6c-1.9,-2.3 -4.1,-4.2 -6.6,-5.7c-2.9,-1.8 -6.2,-3 -9.9,-3.6c-3.7,-0.6 -8.1,-0.9 -13.1,-0.9h-34.2c-4.6,0 -7.9,1 -9.9,3.1c-2,2 -3.1,5.4 -3.1,10v79.4c0,4.6 1,7.9 3,10c2,2.1 5.3,3.1 10,3.1h32.3c5.6,0 10.4,-0.3 14.6,-0.8c4.2,-0.6 7.9,-1.5 11.1,-2.8c5.1,-2.3 9.2,-5.8 12.2,-10.5c3,-4.7 4.5,-10 4.5,-16c0,-12.7 -6.9,-21.3 -20.8,-25.7zM157.9,283h17.4c7.8,0 13.6,0.9 17.4,2.6c3.8,1.8 5.7,5.3 5.7,10.6c0,2.5 -0.6,4.8 -1.8,6.8c-1.5,2.8 -3.8,4.8 -6.7,5.8c-2.9,1 -7,1.5 -12.4,1.5h-19.6zM180.9,356.5h-23v-30.8h22.3c7.4,0 13,1.2 16.8,3.6c3.7,2.4 5.6,6.3 5.6,11.6c0,10.4 -7.3,15.6 -21.7,15.6z"
              fill="#ecedea"
            ></path><g
              ><path
                d="M402.4,245.5h-132.9c-4.9,0 -8.9,4 -8.9,8.9v132.9c0,4.9 4,8.9 8.9,8.9h132.9c4.9,0 8.9,-4 8.9,-8.9v-132.8c0,-5 -4,-9 -8.9,-9z"
                fill="#edc92f"
              ></path><path
                d="M380.1,337c-1.8,-1.8 -4,-2.7 -6.5,-2.7c-3,0 -5.1,0.9 -6.5,2.6c-1.3,1.8 -2.5,4 -3.4,6.8c-2.2,5.9 -5.4,10.4 -9.6,13.4c-4.2,3 -9.4,4.6 -15.6,4.6c-5.7,0 -10.6,-1.3 -14.8,-4c-4.2,-2.7 -7.5,-6.8 -9.8,-12.2c-2.3,-5.4 -3.5,-12.3 -3.5,-20.5c0,-12.3 2.6,-21.8 7.8,-28.4c5.2,-6.7 12.2,-10 21,-10c5.5,0 10.2,1.3 13.9,3.9c3.8,2.6 7,6.5 9.8,11.7c1.7,3.2 3.2,5.4 4.6,6.7c1.4,1.3 3.4,1.9 6.2,1.9c2.4,0 4.5,-0.9 6.3,-2.8c1.7,-1.9 2.6,-4 2.6,-6.5c0,-4.5 -1.8,-9.2 -5.3,-14.2c-3.6,-5 -8.7,-9.2 -15.3,-12.6c-6.7,-3.4 -14.3,-5.1 -22.8,-5.1c-7,0 -13.6,1.3 -19.8,3.7c-6.2,2.5 -11.6,6.1 -16.2,10.9c-4.6,4.8 -8.1,10.5 -10.6,17.2c-2.5,6.7 -3.7,14.3 -3.7,22.8c0,5.2 0.5,10.2 1.5,14.8c1,4.7 2.5,9 4.4,13.1c2,4.1 4.3,7.8 7.1,11.1c3.1,3.6 6.5,6.6 10.3,8.8c3.7,2.2 7.9,3.9 12.4,4.9c4.6,1.1 9.6,1.6 15.2,1.6c7.3,0 13.8,-1.2 19.3,-3.5c5.5,-2.4 10.1,-5.4 13.6,-9.2c3.6,-3.8 6.2,-7.6 7.8,-11.5c1.7,-3.9 2.5,-7.5 2.5,-10.9c-0.2,-2.4 -1.1,-4.7 -2.9,-6.4z"
                fill="#ecedea"
              ></path></g
            ></g
          ></g
        >
      </svg>
      <svg
        class="second-svg-w"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70px"
        height="70px"
        viewBox="0,0,255.99055,255.99055"
      >
        <g transform="translate(38.39858,38.39858) scale(0.7,0.7)"
          ><g
            fill="#e2f099"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><path
              d="M127.99528,310.84567c-100.98549,0 -182.8504,-81.86491 -182.8504,-182.8504v0c0,-100.98549 81.86491,-182.8504 182.8504,-182.8504v0c100.98549,0 182.8504,81.86491 182.8504,182.8504v0c0,100.98549 -81.86491,182.8504 -182.8504,182.8504z"
              id="shape"
            ></path></g
          ><g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
            ><g transform="scale(5.12,5.12)"
              ><path
                d="M25,4.0625c-12.58594,0 -22.9375,8.86328 -22.9375,19.9375c0,6.42578 3.5625,12.09375 8.9375,15.71875c-0.00781,0.21484 0,0.54688 -0.28125,1.59375c-0.34766,1.29297 -1.03516,3.125 -2.46875,5.15625l-1.03125,1.4375l1.78125,0.03125c6.17578,0.02734 9.75391,-4.03125 10.3125,-4.6875c1.82422,0.40625 3.72266,0.6875 5.6875,0.6875c12.58203,0 22.9375,-8.86328 22.9375,-19.9375c0,-11.07422 -10.35547,-19.9375 -22.9375,-19.9375zM25,5.9375c11.71484,0 21.0625,8.15234 21.0625,18.0625c0,9.91016 -9.34766,18.0625 -21.0625,18.0625c-2.00391,0 -3.94922,-0.24219 -5.78125,-0.6875l-0.5625,-0.125l-0.375,0.46875c0,0 -2.89062,3.25781 -7.5,4.03125c0.83203,-1.49219 1.46484,-2.87891 1.75,-3.9375c0.39844,-1.48047 0.40625,-2.5 0.40625,-2.5v-0.5l-0.4375,-0.28125c-5.22656,-3.3125 -8.5625,-8.58984 -8.5625,-14.53125c0,-9.91016 9.34375,-18.0625 21.0625,-18.0625z"
              ></path></g
            ></g
          ></g
        >
      </svg>
      <img src="/others/who-are-we.png" alt="Who are we" />
    </div>
  </div>
</div>

<div class="team">
  <div class="team-container">
    <h2>Нашите специалисти</h2>
    <!-- Sonia Ignatova -->
    <div class="team-content" style="margin-bottom: 5rem;">
      <div class="member-stats">
        <img src="/pfps/team/sonia.png" alt="Sonia" class="team-member" />
        <h3 class="team-member-name">Соня Игнатова</h3>
        <p class="team-member-role">логопед, специален педагог</p>
        <p class="team-member-contacts">example@example.com</p>
        <p class="team-member-contacts">+359 88 888 8888</p>
      </div>
      <div class="member-info">
        <p>
          Казвам се Соня Игнатова и съм магистър „Логопед“ и „Специален педагог“
          с дълогодишен опит. Завършвам магистратура „Специален педагог“ във ВПИ
          „Неофит Рилски“ ,гр. Благоевград и магистратура „Езикова и речева
          патология“ в НБУ.
        </p>
        <p>
          Занимавам се с диагностика, консултация и терапия на езиково-говорното
          развитие, комуникативни нарушения и обучителни затруднения на деца от
          различни възрастови групи.
        </p>
        <p>
          Мотивите, които ме ръководят, в съзнателната си дейност като терапевт,
          са подчинени на Негово Величество Детето.
        </p>
        {#if showAdditionalSection1}
          <p>
            От 1993 г съм посветила интересите си и дейноста си като специален
            педагог и логопед на работата с деца със специални образователни
            потребности в Държавни институции, а от 2007 г. основавам ОЦ „Логос
            – Аз и Ти“, където се предлагат различни образователни и
            терапевтични услуги в помощ и грижа на децата.
          </p>
          <p>
            За мен логопедията е призвание - да чуваш и виждаш невидимото. Тя е
            път, по който вървим заедно: аз- детето - родител, с доверие, грижа
            и знание. За мен всеки овладян звук е стъпка, всяка овладяна дума -
            постижение, всяка усмивка – победа. Вярвам в силата на малките
            крачки, водещи до голям успех.
          </p>
          <p>
            Съавтор на книгите „Диагностичен албум, предназначен за логопеди,
            психолози и педагози”, Сборник за деца „Играя и зная“, съавтор на
            работни листове, организатор на Терапевтилници за деца, посветени на
            различни тематики, свързани с езиково-говорното, когнитивното и
            моторното развитие на децата; съавтор на логопедични карти:
            „Логопедична вдъхновителница“ и други.
          </p>
          <button class="more-less" on:click={toggleSection1}
            >Прочети по-малко</button
          >
        {:else}
          <button class="more-less" on:click={toggleSection1}
            >Прочети повече</button
          >
        {/if}
        <div class="member-certificates">
          <h3>
            Придобити квалификации, обучения, сертификати и участия в семинари,
            някои от които са:
          </h3>
          <ul>
            <li>
              “Ремелка “ - методика за обучение по смятане и социална
              компетентност на деца с обучителни затруднения;
            </li>
            <li>
              “ Орално Моторна терапия в логопедичната практика “– Talk Tools
              ниво 1;
            </li>
            <li>Участие за работа с картинен тест фонологично осъзнаване ;</li>
            {#if showAdditionalSection2}
              <li>
                Участие със сертификат в "Орофациална рефлексна интеграция",
                авторски курс на Mickaël Benoit Graphoréflexes;
              </li>
              <li>
                Участие със сертификат в RMTi Ниво 1 - Фокус, Организация и
                Разбиране, с лектор Надежда Пейчевска от Brain Change;
              </li>
              <li>
                Участие със сертификат в RMTi Ниво 2 - Емоции, Памет и
                Поведение, с лектор Надежда Пейчевска от BrainChange;
              </li>
              <li>
                Сертифицирано обучение - Диагностика на говора и нарушенията му
                в предучилищна възраст: прилагане на Тестова батерия за орални
                моторни способности (ТОМС), с лектор Елена Бояджиева – Делева;
              </li>
              <li>
                Участие в семинари, организирани от логопед София Вълнеева:
                „Приобщаване на родителите като помощник-терапевти“, „Логопедът
                и децата“, „Децата и екраните“ с участие на презентации на тема
                „Играта – терапевтичен инструмент в логопедичната практика“ ,
                „Децата и екраните – враг или глас? Логопедичен поглед към ДАК“
                , научни конференции в областта на Логопедията и образованието.
              </li>
              <button
                class="more-less"
                style="margin-top: 2rem;"
                on:click={toggleSection2}>Прочети по-малко</button
              >
            {:else}
              <button
                class="more-less"
                style="margin-top: 2rem;"
                on:click={toggleSection2}>Прочети повече</button
              >
            {/if}
          </ul>
        </div>
        <p>
          Съвместно поддържа страниците във фейсбук – By Соня Игнатова – логопед
          и специален педагог и ОЦ „Логос – Аз и Ти“ и инстаграм страницата
          logosaziti.
        </p>
        <p>
          С уважение:<br />
          Соня Игнатова
        </p>
      </div>
    </div>
    <!-- Maria Tuputi -->
    <div class="team-content">
      <div class="member-stats">
        <img src="/pfps/team/maria.png" alt="Maria" class="team-member" />
        <h3 class="team-member-name">Мария-Паола Тупути</h3>
        <p class="team-member-role">логопед, ерготерапевт</p>
        <p class="team-member-contacts">example@example.com</p>
        <p class="team-member-contacts">+359 88 888 8888</p>
      </div>
      <div class="member-info">
        <p>
          Казвам се Мария-Паола Тупути. Придобивам бакалавърската си степен в
          Нов Български университет БП „Логопедия“, магистърка степен „Езикова и
          речева патология“ и квалификационна програма „Ерготерапия в
          приобщаващото обраование“ към Нов Български университет.
        </p>
        <p>
          От две години работя като логопед и ерготерапевт в Образователен
          център „Логос – Аз и Ти“, където имам възможността ежедневно да
          подкрепям деца с различни комуникативни, моторни и обучителни
          затруднения.
        </p>
        {#if showAdditionalSection3}
          <p>
            Избрах тази професия, защото вярвам, че комуникацията е ключът към
            развитието и свързаността. Да бъда част от пътя на всяко дете към
            разбиране, изразяване и овладяване на комуникативните, когнитивните
            и моторните умения е мисия, която изпълнявам с отговорност,
            отдаденост и вяра в потенциала на всяко дете.
          </p>
          <p>
            Работата ми съчетава логопедичен и ерготерапевтичен подход, като
            акцентът е върху индивидуалния потенциал и нужди на всяко дете.
            Стремя се да създавам ангажираща, подкрепяща и стимулираща среда, в
            която децата да развиват своите умения чрез игра, движение и
            комуникация.
          </p>
          <p>
            Съавтор на работни листове, организатор на Терапевтилници за деца,
            посветени на различни тематики, свързани с езиково-говорното,
            когнитивното и моторното развитие на децата; съавтор на логопедични
            карти: „Логопедична вдъхновителница“ и други.
          </p>
          <button class="more-less" on:click={toggleSection3}
            >Прочети по-малко</button
          >
        {:else}
          <button class="more-less" on:click={toggleSection3}
            >Прочети повече</button
          >
        {/if}
        <div class="member-certificates">
          <h3>
            Придобити квалификации, обучения, сертификати и участия в семинари,
            някои от които са:
          </h3>
          <ul>
            <li>
              Сертифицирано обучение - Диагностика на говора и нарушенията му в
              предучилищна възраст: прилагане на Тестова батерия за орални
              моторни способности (ТОМС), с лектор Елена Бояджиева – Делева;
            </li>
            <li>
              Участие в семинари, организирани от логопед София Вълнеева:
              „Логопедът и децата“, „Децата и екраните“ с участие на презентации
              на тема „Играта – терапевтичен инструмент в логопедичната
              практика“ , „Децата и екраните – враг или глас? Логопедичен поглед
              към ДАК“ и научни конференции в областта на Логопедията и
              образованието.
            </li>
          </ul>
        </div>
        <p>
          Съвместно поддържа страницата във фейсбук –ОЦ „Логос – Аз и Ти“ и
          инстаграм страницата logosaziti.
        </p>
        <p>
          С уважение:<br />
          Мария-Паола Тупути
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Cormorant Garamond", serif;
  }
  h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 1rem;
    text-align: left;
  }
  /* img{max-width:100%;display:block} */

  /* ---- 1. Heading ---- */
  .heading {
    background-color: var(--orange);
    text-align: left;
    border-radius: 16px;
    padding: 40px 0 40px 40px;
    margin: 30px 0 40px 0;
    color: #fff;
  }

  .heading-container {
    display: flex;
    justify-content: space-between;
    width: 97%;
    max-width: 1000px;
  }

  #h-left {
    width: 50%;
  }

  #h-right {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 20px;
    margin: 20px 0;
    width: 45%;
  }

  .heading h1 {
    font-size: 3.3em;
    margin-bottom: 20px;
    font-family: "ABeeZee", sans-serif;
  }

  .first-svg {
    transform: translateY(-75%);
  }

  .second-svg {
    transform: translateY(55%);
  }

  .heading p {
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--dark-gray);
  }

  /* ---- 2. Who are we ---- */
  .who-a-w {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
  }

  .who-a-w-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
  }

  .w-left {
    width: 51%;
    padding-right: 20px;
    line-height: 1.5;
  }

  .w-left p {
    font-size: 1.3rem;
  }

  .w-right {
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    position: relative;
    padding: 0 25px;
  }

  .first-svg-w {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
  }

  .second-svg-w {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
  }

  .w-right img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
  }

  /* ---- 3. Team ---- */
  .team {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
  }

  .team-container {
    width: 90%;
    max-width: 1000px;
  }

  .team-content {
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 4rem;
    align-items: start;
    background: var(--orange-light);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 3rem;
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  /* Member Stats (Left Side) */
  .member-stats {
    /* background: linear-gradient(185deg, #afd683 0%, #ffac71 100%); */
    background: var(--background);
    border: 2px solid var(--orange);
    border-radius: 20px;
    padding: 2.5rem;
    text-align: center;
    position: sticky;
    top: 2rem;
    box-shadow: 0 15px 35px rgba(216, 223, 255, 0.3);
  }

  .team-member:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }

  .team-member-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .team-member-role {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    font-weight: 500;
  }

  .team-member-contacts {
    background: var(--orange-light);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid var(--orange);
    transition: all 0.3s ease;
  }

  .team-member-contacts:hover {
    background: var(--orange);
    transform: translateY(-2px);
    border: 1px solid var(--orange-light);
  }

  .member-stats img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  /* Member Info (Right Side) */
  .member-info {
    background: white;
    border: 2px solid var(--orange);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  .member-info p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  .more-less {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--background);
    color: var(--orange);
    border: 1px solid var(--orange);
    padding: 1rem 1.5rem;
    border-radius: 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .more-less:hover {
    background: var(--orange-light);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 172, 113, 0.3);
  }

  .member-certificates {
    background: linear-gradient(135deg, #fcf9f7 0%, #f7f4ed 100%);
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem 0;
    border-left: 4px solid var(--orange);
  }

  .member-certificates h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 1.5rem;
  }

  .member-certificates ul {
    list-style: none;
    padding: 0;
  }

  .member-certificates li {
    position: relative;
    padding: 1rem 0 1rem 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
  }

  .member-certificates li:last-child {
    border-bottom: none;
  }

  .member-certificates li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 1rem;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #ffac71 0%, #f8ac28 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }

  /* Smooth animations */
  .member-info {
    animation: slideInRight 0.8s ease-out;
  }

  .member-stats {
    animation: slideInLeft 0.8s ease-out;
  }

  .more-less {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Hover effects for the entire section */
  .team-content {
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .team-content:hover {
    transform: translateY(-5px);
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.3);
  }

  /* ---- Media query - 955 ---- */
  @media screen and (max-width: 955px) {
    /* ---- 1. Heading ---- */
    .heading {
      margin: 30px 30px 40px 30px;
    }

    /* ---- 2. Who are we ---- */
    .w-left {
      width: 45%;
    }

    .w-left p {
      font-size: 1.2rem;
    }

    .w-right {
      width: 55%;
    }

    /* ---- 3. Team ---- */
    .team-container {
      width: 95%;
      max-width: 800px;
    }

    .team-content {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding: 2.5rem;
      margin-bottom: 3rem;
    }

    /* Member Stats adjustments for tablet */
    .member-stats {
      position: static;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--background);
      border: 2px solid var(--orange);
      border-radius: 20px;
      box-shadow: 0 15px 35px rgba(216, 223, 255, 0.3);
    }

    .member-stats img {
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
    }

    .team-member-name {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    .team-member-role {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .team-member-contacts {
      width: 100%;
      max-width: 280px;
      text-align: center;
      padding: 0.7rem 1rem;
      margin-bottom: 0.7rem;
      font-size: 0.9rem;
    }

    /* Member Info adjustments for tablet */
    .member-info {
      padding: 2rem;
    }

    .member-info p {
      font-size: 1.3rem;
      line-height: 1.7;
      margin-bottom: 1.2rem;
    }

    .member-certificates {
      padding: 1.5rem;
      margin: 1.5rem 0;
    }

    .member-certificates h3 {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }

    .member-certificates li {
      padding: 0.8rem 0 0.8rem 1.8rem;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .member-certificates li::before {
      width: 18px;
      height: 18px;
      top: 0.8rem;
      font-size: 0.75rem;
    }

    .more-less {
      padding: 0.9rem 1.3rem;
      font-size: 0.95rem;
    }
  }

  /* ---- Media query - 755 ---- */
  @media screen and (max-width: 755px) {
    h2 {
      margin-left: 0;
    }
    /* ---- 1. Heading ---- */
    .heading {
      padding: 35px 35px 10px 35px;
      margin: 20px 0;
    }

    .heading-container {
      flex-direction: column;
    }

    #h-left,
    #h-right {
      width: 100%;
      text-align: center;
      font-size: larger;
      margin: 0 auto;
    }

    #h-right {
      margin-top: 25px;
      padding: 20px 0;
    }

    .heading h1 {
      font-size: 2.5em;
    }

    .first-svg {
      transform: translateY(-25%);
    }

    .second-svg {
      transform: translateY(10%);
      align-self: flex-start;
    }

    /* ---- 2. Who are we ---- */
    .who-a-w {
      flex-direction: column;
      align-items: center;
    }

    .who-a-w-container {
      flex-direction: column;
    }

    .w-left {
      width: 100%;
      padding-right: 0;
    }

    .w-left p {
      font-size: 1.3rem;
    }

    .w-right {
      width: 100%;
      padding: 0;
      margin: 50px 0;
      display: flex;
      flex-direction: column;
    }

    /* ---- 3. Team ---- */
    .team {
      margin-top: 1.5rem;
    }

    .team-container {
      width: 98%;
      max-width: 100%;
    }

    .team-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1.5rem;
      margin-bottom: 2.5rem;
      border-radius: 20px;
    }

    .team-content,
    h3,
    p,
    li {
      font-size: larger;
      line-height: 1.5;
    }

    /* Member Stats for mobile */
    .member-stats {
      position: static;
      padding: 1.5rem;
      text-align: center;
      border-radius: 16px;
    }

    .member-stats img {
      width: 100px;
      height: 100px;
      margin-bottom: 1rem;
    }

    .team-member-name {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }

    .team-member-role {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .team-member-contacts {
      width: 100%;
      max-width: 70%;
      padding: 0.6rem 0.8rem;
      margin-bottom: 0.6rem;
      font-size: 0.85rem;
      border-radius: 10px;
    }

    /* Member Info for mobile */
    .member-info {
      padding: 1.5rem;
      border-radius: 16px;
    }

    .member-info p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      text-align: left;
    }

    .member-certificates {
      padding: 1.2rem;
      margin: 1.2rem 0;
      border-radius: 12px;
    }

    .member-certificates h3 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    .member-certificates ul {
      margin: 0;
    }

    .member-certificates li {
      padding: 0.7rem 0 0.7rem 1.5rem;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .member-certificates li::before {
      width: 16px;
      height: 16px;
      top: 0.7rem;
      font-size: 0.7rem;
      left: 0;
    }

    .more-less {
      width: 100%;
      justify-content: center;
      padding: 0.8rem 1rem;
      font-size: 0.9rem;
      border-radius: 12px;
      margin: 1rem 0;
    }

    /* Enhanced touch targets for mobile */
    .more-less:hover {
      transform: none;
    }

    .more-less:active {
      transform: scale(0.98);
    }

    .team-member-contacts:active {
      transform: scale(0.98);
    }

    /* Disable complex animations on mobile for better performance */
    .member-info,
    .member-stats {
      animation: none;
    }

    .team-content:hover {
      transform: none;
    }

    .team-member:hover {
      transform: none;
    }
  }

  @media screen and (max-width: 480px) {
    .team-content {
      font-size: medium !important;
      padding: 1.2rem;
      gap: 1.2rem;
      margin-bottom: 2rem;
    }

    .member-stats {
      padding: 1.2rem;
    }

    .member-stats img {
      width: 90px;
      height: 90px;
    }

    .team-member-name {
      font-size: 1.1rem;
    }

    .team-member-role {
      font-size: 0.85rem;
    }

    .team-member-contacts {
      font-size: 0.8rem;
      padding: 0.5rem 0.7rem;
    }

    .member-info {
      padding: 1.2rem;
    }

    .member-info p {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .member-certificates {
      padding: 1rem;
    }

    .member-certificates h3 {
      font-size: 1rem;
      line-height: 1.3;
    }

    .member-certificates li {
      font-size: 0.85rem;
      padding: 0.6rem 0 0.6rem 1.3rem;
    }

    .member-certificates li::before {
      width: 14px;
      height: 14px;
      top: 0.6rem;
      font-size: 0.65rem;
    }

    .more-less {
      font-size: 0.85rem;
      padding: 0.7rem 0.8rem;
    }
  }
</style>
