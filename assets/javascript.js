
$(function () {
    $(window).scroll(function () {
        var windowScrollTop = $(this).scrollTop();
        if (windowScrollTop >= 800) {
            $('#bttop').fadeIn();
        } else {
            $('#bttop').fadeOut();
        }
    });
    $('.goToTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1600);
    });
});



$('.product_nav-category').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinity: true,
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fas fa-caret-left'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fas fa-caret-right'></i></button>",
    
    responsive: [
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:
                    "<button type='button' class='slick-prev pull-left'><i class='fas fa-caret-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slick-next pull-right'><i class='fas fa-caret-right'></i></button>",
    
            },
        },
    ],
  });

  $('.top_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    
    dots: false,
    infinity: true,
    //centerMode: true,

    autoplaySpeed: 1550,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow:
                    "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    
            },
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:
                    "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    
            },
        },
    ],
  });

  $('.new_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    
    dots: false,
    infinity: true,
    //centerMode: true,

    autoplaySpeed: 1550,
    responsive: [

        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow:
                    "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    
            },
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:
                    "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    
            },
        },
    ],
  });

  document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('Sdt');
    // Ngăn chặn sự kiện keydown liên quan đến các phím mũi tên
    numberInput.addEventListener('keydown', function (e) {
        if (e.keyCode === 38 || e.keyCode === 40) { // 38 là phím mũi tên lên, 40 là phím mũi tên xuống
            e.preventDefault(); // Ngăn chặn sự kiện mặc định của phím mũi tên
        }
    });

    numberInput.addEventListener('input', function () {
        const maxLength = 10;

        // Lấy giá trị hiện tại của ô input
        let enteredValue = numberInput.value;

        // Loại bỏ các ký tự không phải số từ giá trị nhập vào
        enteredValue = enteredValue.replace(/\D/g, ''); // Chỉ giữ lại các chữ số

        // Giới hạn độ dài của giá trị nhập vào
        if (enteredValue.length > maxLength) {
            enteredValue = enteredValue.slice(0, maxLength); // Chỉ lấy số chữ số tối đa
        }
        // Cập nhật lại giá trị trong ô input
        numberInput.value = enteredValue;
    });

});
function validatePhone() {
    const phone = document.getElementById('Sdt').value;
    
    // Kiểm tra xem có đúng 10 chữ số không
    const phoneRegex = /^\d{10}$/;

    if (phoneRegex.test(phone)) {
      
    } else {
      alert("Số điện thoại phải đủ 10 số.");
    }
  }



  document.addEventListener('DOMContentLoaded', function () {
    // Mong muốn của chúng ta
    Validator({
      form: '#form-1',
      formGroupSelector: '.form-group',
      errorSelector: '.form-message',
      rules: [
        Validator.isRequired('#Hoten'),
        Validator.isRequired('#Sdt'),
        Validator.isRequired('#TenCH'),
        Validator.isRequired('#Noidung')
      ],
      onSubmit: function (data) {
        // Call API
        console.log(data);
      }
    });
    Validator({
        form: '#form-2',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
          Validator.isRequired('#Hoten'),
          Validator.isRequired('#Sdt'),
          Validator.isRequired('#Noidung')
        ],
        onSubmit: function (data) {
          // Call API
          console.log(data);
        }
      });
});

function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                } 
            });
        });
    }

}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message || 'Vui lòng nhập trường này'
        }
    };
}


function toggleButton() {
    const checkbox = document.getElementById('conten-checkbox');
    const submitButton = document.getElementById('submitButton');

    // Kiểm tra trạng thái của checkbox
    if (checkbox.checked) {
      submitButton.disabled = false; // Bỏ thuộc tính disabled khi checkbox được chọn
      submitButton.style.opacity = '1';
    } else {
      submitButton.disabled = true; // Thiết lập lại disabled khi checkbox không được chọn
      submitButton.style.opacity = '0.6';
    }
  }