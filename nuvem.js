$(document).ready(() => {
  var largura = 0
  if(window.innerWidth > 600 ) {
    largura = window.innerWidth - 300
  } else {
    largura = window.innerWidth - 220
  }
  const loop = () => {
    $(".nuvem").animate({
      left: '+='+(largura)
    }, 20000, 'linear', () => {
      $(".nuvem").animate({
        left: '-90'
      }, 20000, 'linear', () => {
        loop()
      })
    })
  }

  const loop2 = () => {
    // $(".nuvem2").css({left:(window.innerWidth - 300)});
    $(".nuvem2").animate({
      left: '-90'
    }, 25000, 'linear', () => {
      $(".nuvem2").animate({
        left: '+='+(largura)
      }, 25000, 'linear', () => {
        loop2()
      })
    })
  }

  const loop3 = () => {
    $(".nuvem3").animate({
      left: '+='+(largura)
    }, 21000, 'linear', () => {
      $(".nuvem3").animate({
        left: '-90'
      }, 21000, 'linear', () => {
        loop3()
      })
    })
  }

  const loop4 = () => {
    // $(".nuvem4").css({left:(window.innerWidth - 300)});
    $(".nuvem4").animate({
      left: '-90'
    }, 23000, 'linear', () => {
      $(".nuvem4").animate({
        left: '+='+(largura)
      }, 23000, 'linear', () => {
        loop4()
      })
    })
  }

  const loop5 = () => {
    $(".nuvem5").animate({
      left: '+='+(largura)
    }, 19000, 'linear', () => {
      $(".nuvem5").animate({
        left: '-90'
      }, 19000, 'linear', () => {
        loop5()
      })
    })
  }

  const loop6 = () => {
    // $(".nuvem6").css({left:(window.innerWidth - 300)});
    $(".nuvem6").animate({
      left: '-90'
    }, 24000, 'linear', () => {
      $(".nuvem6").animate({
        left: '+='+(largura)
      }, 24000, 'linear', () => {
        loop6()
      })
    })
  }
  loop()
  loop2()
  loop3()
  loop4()
  loop5()
  loop6()
  console.log(window.innerWidth)
})
