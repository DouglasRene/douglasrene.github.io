$(document).ready(() => {
  const loop = () => {
    $(".nuvem").animate({
      left: '+='+(window.innerWidth - 250)
    }, 20000, 'linear', () => {
      $(".nuvem").animate({
        left: '-90'
      }, 20000, 'linear', () => {
        loop()
      })
    })
  }

  const loop2 = () => {
    $(".nuvem2").css({left:(window.innerWidth - 250)});
    $(".nuvem2").animate({
      left: '-90'
    }, 25000, 'linear', () => {
      $(".nuvem2").animate({
        left: '+='+(window.innerWidth - 250)
      }, 25000, 'linear', () => {
        loop2()
      })
    })
  }

  const loop3 = () => {
    $(".nuvem3").animate({
      left: '+='+(window.innerWidth - 250)
    }, 21000, 'linear', () => {
      $(".nuvem3").animate({
        left: '-90'
      }, 21000, 'linear', () => {
        loop3()
      })
    })
  }

  const loop4 = () => {
    $(".nuvem4").css({left:(window.innerWidth - 250)});
    $(".nuvem4").animate({
      left: '-90'
    }, 23000, 'linear', () => {
      $(".nuvem4").animate({
        left: '+='+(window.innerWidth - 250)
      }, 23000, 'linear', () => {
        loop4()
      })
    })
  }

  const loop5 = () => {
    $(".nuvem5").animate({
      left: '+='+(window.innerWidth - 250)
    }, 19000, 'linear', () => {
      $(".nuvem5").animate({
        left: '-90'
      }, 19000, 'linear', () => {
        loop5()
      })
    })
  }

  const loop6 = () => {
    $(".nuvem6").css({left:(window.innerWidth - 250)});
    $(".nuvem6").animate({
      left: '-90'
    }, 24000, 'linear', () => {
      $(".nuvem6").animate({
        left: '+='+(window.innerWidth - 250)
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
})