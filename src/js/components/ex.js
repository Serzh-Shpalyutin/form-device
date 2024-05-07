
// маска для инпутов с type="tel"
import $ from 'jquery';
import { Inputmask } from "../vendor/jquery.maskedinput.js";
Inputmask();

// тултипы
import tippy from 'tippy.js';

tippy('#tooltip-1', {
  content: 'Стандартная гарантия на приборы выпуска ООО "Рубеж" составляет два года с момента выпуска. Если у Вашего прибора закончился гарантийный срок, заполните Гарантийное письмо и приложите его к прибору при отправке.',
  animation: 'fade',
  theme: 'green',
});

tippy('#tooltip-2', {
  content: 'Обращаем ваше внимание, что на постгарантийное обслуживание принимается оборудование, срок выпуска которого НЕ превышает 5 лет. Поступившее в наш адрес оборудование со сроком выпуска свыше 5 лет, подлежит возврату на адрес Потребителя за его счет.',
  animation: 'fade',
  theme: 'green',
});

tippy('#tooltip-3', {
  content: 'В случае, если у вашегои изделия отсутствует серийный номер, поставьте галочку',
  animation: 'fade',
  theme: 'green',
});

tippy('#tooltip-4', {
  content: 'Опишите выявленную неисправность максимально подробно',
  animation: 'fade',
  theme: 'green',
});

tippy('#tooltip-33', {
  content: 'В случае, если у вашегои изделия отсутствует серийный номер, поставьте галочку',
  animation: 'fade',
  theme: 'green',
});

tippy('#tooltip-44', {
  content: 'Опишите выявленную неисправность максимально подробно',
  animation: 'fade',
  theme: 'green',
});

tippy('#tooltip-tel', {
  content: 'На данный номер телефона Вам будет приходить оповещение о статусе ремонта (через WhapsApp)',
  animation: 'fade',
  theme: 'green',
});

tippy('.table__btn--edit', {
  content: 'Редактировать текущую строку',
  animation: 'fade',
  theme: 'green',
});

tippy('.table__btn--copy', {
  content: 'Скопировать текущую строку',
  animation: 'fade',
  theme: 'green',
});

tippy('.table__btn--delete', {
  content: 'Удалить текущую строку',
  animation: 'fade',
  theme: 'green',
});

tippy('.import-act', {
  content: 'Импортировать приборы из ранее созданного акта',
  animation: 'fade',
  theme: 'green',
});

tippy('.import-excel', {
  content: 'Импортировать приборы из эксель файла',
  animation: 'fade',
  theme: 'green',
});

tippy('.table-control-btns__btn-add', {
  content: 'Добавить новый прибор',
  animation: 'fade',
  theme: 'green',
});

$("input[name=address]").suggestions({
  token: "56db38addae516b4ba271d4fa302b103e07357ad",
  type: "ADDRESS",
  /* Вызывается, когда пользователь выбирает одну из подсказок */
  onSelect: function (suggestion) {
    console.log(suggestion);
  }
});

// оставляем ввод только цифр в инпуты с ИНН
$('.form__block-input--inn').on('input', function () {
  // Получаем значение инпута
  var inputValue = $(this).val();

  // Удаляем все символы, кроме цифр
  var sanitizedInput = inputValue.replace(/\D/g, '');

  // Ограничиваем длину ввода до 12 символов
  sanitizedInput = sanitizedInput.substring(0, 12);

  // Устанавливаем новое значение инпута
  $(this).val(sanitizedInput);
});

// работа с модальными окнами

$('.js-modal-open').on('click', function () {
  var modal = $('#' + $(this).data('modal'));
  modal.addClass('is-active');
  $('.modal-background').addClass('is-active'); // Добавляем класс активности для фона
  $('body').addClass('is-modal-open');
});

$('.js-modal-close, .modal-background').on('click', function () {
  $('.modal').removeClass('is-active');
  $('.modal-background').removeClass('is-active'); // Удаляем класс активности для фона
  $('body').removeClass('is-modal-open');
});

import AirDatepicker from 'air-datepicker';
new AirDatepicker('#datepicker', {
  view: 'years',
  minView: 'months',
  dateFormat: 'MM.yyyy',
  position({ $datepicker, $target, $pointer }) {
    let coords = $target.getBoundingClientRect(),
      dpHeight = $datepicker.clientHeight,
      dpWidth = $datepicker.clientWidth;

    let top = coords.y + coords.height / 2 + window.scrollY - dpHeight / 2;
    let left = coords.x + coords.width / 2 - dpWidth / 2;

    $datepicker.style.left = `${left}px`;
    $datepicker.style.top = `${top}px`;

    $pointer.style.display = 'none';

  }
});

new AirDatepicker('#datepicker-edit', {
  view: 'years',
  minView: 'months',
  dateFormat: 'MM.yyyy',
  position({ $datepicker, $target, $pointer }) {
    let coords = $target.getBoundingClientRect(),
      dpHeight = $datepicker.clientHeight,
      dpWidth = $datepicker.clientWidth;

    let top = coords.y + coords.height / 2 + window.scrollY - dpHeight / 2;
    let left = coords.x + coords.width / 2 - dpWidth / 2;

    $datepicker.style.left = `${left}px`;
    $datepicker.style.top = `${top}px`;

    $pointer.style.display = 'none';

  }
});

// логика работы с формой
document.addEventListener('DOMContentLoaded', function () {
  // появление полей в разделе способ возврата
  var deliveryRadios = document.querySelectorAll('input[name="delivery-method"]');
  var deliveryHiddenItems = document.querySelector('.form__delivery-hidden-items');

  if (deliveryRadios.length > 0 && deliveryHiddenItems) {
    deliveryRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        if (this.checked && this.value === 'Срочная отправка по окончании ремонта') {
          deliveryHiddenItems.classList.add('active');
        } else {
          deliveryHiddenItems.classList.remove('active');
        }
      });
    });
  }

  // // Получаем все радиокнопки с именем "terms-use"
  // var termsUseRadios = document.querySelectorAll('input[name="terms-use"]');
  // var termsUseBlock = document.querySelector('.form__block-item-hidden-textarea');

  // // Перебираем каждую радиокнопку
  // termsUseRadios.forEach(function(radio) {
  //   // Навешиваем обработчик события "change" на каждую радиокнопку
  //   radio.addEventListener('change', function() {
  //     // Если выбран вариант "свой вариант"
  //     if (this.value === 'свой вариант') {
  //       // Показываем блок с текстовым полем
  //       termsUseBlock.classList.add('active');
  //     } else {
  //       // Скрываем блок с текстовым полем
  //       termsUseBlock.classList.remove('active');
  //     }
  //   });
  // });

  // валидация поля email
  var emailInput = document.querySelector('.form__block-input-email');

  emailInput.addEventListener('input', function () {
    var email = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailInput.setCustomValidity('Пожалуйста, введите корректный email');
      emailInput.classList.add('invalid');
    } else {
      emailInput.setCustomValidity('');
      emailInput.classList.remove('invalid');
    }
  });

  emailInput.addEventListener('invalid', function () {
    if (emailInput.value === '') {
      emailInput.setCustomValidity('Поле email не должно быть пустым');
    } else {
      emailInput.setCustomValidity('Пожалуйста, введите корректный email');
    }
  });

  // Функция копирования значения и установки атрибута readonly
  function copyValue(sourceInput, targetInput) {
    targetInput.value = sourceInput.value;
    targetInput.readOnly = true;
  }

  // Функция обработки события изменения чекбокса
  function handleCheckboxChange(checkbox, sourceInput, targetInput) {
    if (checkbox.checked) {
      copyValue(sourceInput, targetInput);
    } else {
      targetInput.value = ''; // Сброс значения, если чекбокс не отмечен
      targetInput.readOnly = false;
    }
  }

  // Элементы для ИНН
  const checkboxInn = document.querySelector('.form__block-checkbox--inn');
  const innInput = document.querySelector('input[name="inn"]');
  const deliveryInnInput = document.querySelector('input[name="delivery-inn"]');
  checkboxInn.addEventListener('change', function () {
    handleCheckboxChange(checkboxInn, innInput, deliveryInnInput);
  });

  // Элементы для Наименования организации
  const checkboxDeliveryNameCompany = document.querySelector('.form__block-checkbox--delivery-name-company');
  const nameCompanyInput = document.querySelector('input[name="nameCompany"]');
  const deliveryNameCompanyInput = document.querySelector('input[name="delivery-nameCompany"]');
  checkboxDeliveryNameCompany.addEventListener('change', function () {
    handleCheckboxChange(checkboxDeliveryNameCompany, nameCompanyInput, deliveryNameCompanyInput);
  });

  // Элементы для Контактного телефона
  const checkboxPhone = document.querySelector('.form__block-checkbox--delivery-phone');
  const phoneInput = document.querySelector('input[name="phone"]');
  const deliveryPhoneInput = document.querySelector('input[name="delivery-phone"]');
  checkboxPhone.addEventListener('change', function () {
    handleCheckboxChange(checkboxPhone, phoneInput, deliveryPhoneInput);
  });

  // Элементы для Серийного номера (форма добавления)
  var checkboxSerialNumber = document.querySelector('.form__block-checkbox--serialNumber');
  var serialNumberInput = document.querySelector('input[name="serialNumber"]');
  // второе поле серийного номера (форма редактирования)
  var checkboxSerialNumber2 = document.querySelector('.form__block-checkbox--serialNumber2');
  var serialNumberInput2 = document.querySelector('.form__block-input-serialNumber2');

  // первое поле серийного номера (форма добавления)
  checkboxSerialNumber.addEventListener('change', function () {
    if (checkboxSerialNumber.checked) {
      serialNumberInput.value = '000';
      serialNumberInput.readOnly = true;
    } else {
      serialNumberInput.value = ''; // Сброс значения, если чекбокс не отмечен
      serialNumberInput.readOnly = false;
    }
  });

  // второе поле серийного номера (форма редактирования)
  checkboxSerialNumber2.addEventListener('change', function () {
    if (checkboxSerialNumber2.checked) {
      serialNumberInput2.value = '000';
      serialNumberInput2.readOnly = true;
    } else {
      serialNumberInput2.value = ''; // Сброс значения, если чекбокс не отмечен
      serialNumberInput2.readOnly = false;
    }
  });

  // Вызываем функции при загрузке страницы
  handleCheckboxChange(checkboxInn, innInput, deliveryInnInput);
  handleCheckboxChange(checkboxDeliveryNameCompany, nameCompanyInput, deliveryNameCompanyInput);
  handleCheckboxChange(checkboxPhone, phoneInput, deliveryPhoneInput);
  handleCheckboxChange(checkboxSerialNumber, null, serialNumberInput);
  handleCheckboxChange(checkboxSerialNumber2, null, serialNumberInput2);

  // Логика работы с таблицей
  // Получаем форму
  const form = document.getElementById('form-add-device');

  // Получаем таблицу
  const tableBody = document.querySelector('#table-product-data .table__body');

  let rowNumber = 1; // Начальное значение счетчика строк
  let firstRowAdded = false; // Переменная для отслеживания добавления первой строки

  // Функция для проверки уникальности серийного номера
  function isUniqueSerialNumber(serialNumber) {
    const rows = tableBody.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
      const existingSerialNumber = rows[i].querySelector('[data-type="serialNumber"]').textContent;
      // Проверка на уникальность, но разрешаем дубликаты, если серийный номер равен "000"
      if (existingSerialNumber === serialNumber && serialNumber !== "000") {
        return false; // Найден дубликат
      }
    }
    return true; // Уникальный серийный номер или серийный номер "000"
  }

  // Функция для проверки даты и добавления класса в зависимости от разницы во времени
  function checkDateAndAddClass(element) {
    // Получаем текущую дату
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Месяцы начинаются с 0

    // Получаем дату из элемента
    var dateParts = element.querySelector('.col-1[data-type="dateMaking"]').innerText.split('.');
    var year = parseInt(dateParts[1]);
    var month = parseInt(dateParts[0]);

    // Рассчитываем разницу в годах и месяцах
    var yearDiff = currentYear - year;
    var monthDiff = currentMonth - month;
    var totalMonths = yearDiff * 12 + monthDiff;

    // Определяем класс в зависимости от разницы в датах
    var classToAdd = (totalMonths > 5 * 12) ? 'table__row-added-danger' : 'table__row-added-ok';

    // Добавляем класс к элементу
    element.classList.add('table__row-added', classToAdd);
  }

  // Обработчик отправки формы добавления элементов
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Получаем значения полей формы
    const serialNumber = form.querySelector('.form__block-input').value;
    const deviceName = form.querySelector('.form__block-select').value;
    const dateMaking = form.querySelector('.form__block-input-date').value;
    const operatingTime = form.querySelector('.form__block-input[name="equipment"]').value;
    const operatingConditions = form.querySelector('.form__block-input[name="malfunction"]').value;
    const defectDesc = form.querySelector('.form__block-textarea').value;

    // Проверяем уникальность серийного номера
    if (!isUniqueSerialNumber(serialNumber)) {
      alert('Данный серийный номер уже используется');
      return;
    }

    // Создаем новую строку в таблице
    const newRow = document.createElement('tr');
    newRow.classList.add('table__row-added');
    // Генерируем уникальный идентификатор для новой строки
    const newId = generateUniqueId();
    // Устанавливаем уникальный идентификатор в качестве id для скопированной строки
    newRow.setAttribute('id', newId);

    // Заполняем ячейки новой строки данными из формы
    newRow.innerHTML = `
      <td class="col">${rowNumber++}</td>
      <td class="col-2" data-type="serialNumber">${serialNumber}</td>
      <td class="col-2" data-type="deviceNameText">${deviceName}</td>
      <td class="col-1" data-type="dateMaking">${dateMaking}</td>
      <td class="col-1 text-ellipsis" data-type="operatingTime">${operatingTime}</td>
      <td class="col-2 text-ellipsis" data-type="operatingConditions">${operatingConditions}</td>
      <td class="col-3 text-ellipsis" data-type="defectDesc">${defectDesc}</td>
      <td class="col-2">
          <div class="table__btns">
              <button data-modal="modal-edit" type="button" class="table__btn table__btn--edit">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="4" fill="#e31f23"></rect>
                      <path
                          d="M20 6L23 9L20.713 11.288L17.713 8.288L20 6ZM8 17.988V20.988H11L19.299 12.701L16.299 9.701L8 17.988ZM8 23.988H24V25.988H8V23.988Z"
                          fill="white">
                      </path>
                  </svg>
              </button>

              <button data-modal="modal-copy" type="button" class="table__btn table__btn--copy">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="4" fill="#e31f23"></rect>
                      <path
                          d="M18 12H8C6.897 12 6 12.897 6 14V24C6 25.103 6.897 26 8 26H18C19.103 26 20 25.103 20 24V14C20 12.897 19.103 12 18 12Z"
                          fill="white"></path>
                      <path
                          d="M24 6H14C13.4696 6 12.9609 6.21071 12.5858 6.58579C12.2107 6.96086 12 7.46957 12 8V10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V8C26 7.46957 25.7893 6.96086 25.4142 6.58579C25.0391 6.21071 24.5304 6 24 6Z"
                          fill="white"></path>
                  </svg>
              </button>

              <button type="button" class="table__btn table__btn--delete">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="4" fill="#e31f23"></rect>
                      <path
                          d="M10 11H9V24C9 24.5304 9.21071 25.0391 9.58579 25.4142C9.96086 25.7893 10.4696 26 11 26H21C21.5304 26 22.0391 25.7893 22.4142 25.4142C22.7893 25.0391 23 24.5304 23 24V11H10ZM14 23H12V14H14V23ZM20 23H18V14H20V23ZM20.618 8L19 6H13L11.382 8H7V10H25V8H20.618Z"
                          fill="white">
                      </path>
                  </svg>
              </button>
          </div>
      </td>
  `;

    // Добавляем новую строку в конец таблицы
    tableBody.appendChild(newRow);

    // Если это первая добавленная строка, удаляем демонстрационную строку
    if (!firstRowAdded) {
      const demoRow = document.querySelector('.table__template-tr');
      if (demoRow) {
        demoRow.remove();
        firstRowAdded = true;
      }
    } else if (firstRowAdded) {
      const demoRow = document.querySelector('.table__template-tr');
      if (demoRow) {
        demoRow.remove();
        firstRowAdded = true;
      }
    }

    // Проверяем и добавляем класс для новой строки
    checkDateAndAddClass(newRow);

    // Очищаем значения полей формы после добавления в таблицу
    form.reset();
    document.querySelector('.modal-background').classList.remove('is-active');
    const modalAdd = document.getElementById('modal-add');
    modalAdd.classList.remove('is-active');
    document.querySelector('body').classList.remove('is-modal-open');
  });

  // Обработчик клика на кнопку удаления строки
  tableBody.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('table__btn--delete')) {
      const row = target.closest('tr');
      row.remove();

      // Пересчитываем и переустанавливаем порядковые номера для оставшихся строк
      const rows = tableBody.querySelectorAll('tr');
      rows.forEach((row, index) => {
        row.querySelector('.col').textContent = index + 1;
      });

      // Проверяем количество строк после удаления
      const rowsLeft = rows.length;

      // Если больше нет строк, вставляем указанный HTML-кусок
      if (rowsLeft === 0) {
        tableBody.innerHTML = `
                <tr class="table__template-tr">
                    <td class="col">-</td>
                    <td class="col-2" data-type="serialNumber">-</td>
                    <td class="col-2" data-type="deviceNameText">-</td>
                    <td class="col-1" data-type="dateMaking">-</td>
                    <td class="col-1 text-ellipsis" data-type="operatingTime">-</td>
                    <td class="col-2 text-ellipsis" data-type="operatingConditions">-</td>
                    <td class="col-3 text-ellipsis" data-type="defectDesc">-</td>
                    <td class="col-2">
                        <div class="table__btns">
                            <button data-modal="modal-edit" type="button" class="table__btn table__btn--edit" disabled>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="4" fill="#64A70B"></rect>
                                    <path
                                        d="M20 6L23 9L20.713 11.288L17.713 8.288L20 6ZM8 17.988V20.988H11L19.299 12.701L16.299 9.701L8 17.988ZM8 23.988H24V25.988H8V23.988Z"
                                        fill="white">
                                    </path>
                                </svg>
                            </button>

                            <button data-modal="modal-copy" type="button" class="table__btn table__btn--copy" disabled>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="4" fill="#64A70B"></rect>
                                    <path
                                        d="M18 12H8C6.897 12 6 12.897 6 14V24C6 25.103 6.897 26 8 26H18C19.103 26 20 25.103 20 24V14C20 12.897 19.103 12 18 12Z"
                                        fill="white"></path>
                                    <path
                                        d="M24 6H14C13.4696 6 12.9609 6.21071 12.5858 6.58579C12.2107 6.96086 12 7.46957 12 8V10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V20H24C24.5304 20 25.0391 19.7893 25.4142 19.4142C25.7893 19.0391 26 18.5304 26 18V8C26 7.46957 25.7893 6.96086 25.4142 6.58579C25.0391 6.21071 24.5304 6 24 6Z"
                                        fill="white"></path>
                                </svg>
                            </button>

                            <button type="button" class="table__btn table__btn--delete" disabled>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="4" fill="#64A70B"></rect>
                                    <path
                                        d="M10 11H9V24C9 24.5304 9.21071 25.0391 9.58579 25.4142C9.96086 25.7893 10.4696 26 11 26H21C21.5304 26 22.0391 25.7893 22.4142 25.4142C22.7893 25.0391 23 24.5304 23 24V11H10ZM14 23H12V14H14V23ZM20 23H18V14H20V23ZM20.618 8L19 6H13L11.382 8H7V10H25V8H20.618Z"
                                        fill="white">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
      }
    }
  });

  // Обработчик кнопок копирования
  tableBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('table__btn--copy')) {
      // Получаем родительскую строку кнопки копирования
      const parentRow = event.target.closest('tr');
      // Клонируем родительскую строку
      const copiedRow = parentRow.cloneNode(true);
      // Находим ячейку серийного номера и изменяем ее содержимое на "-"
      copiedRow.querySelector('[data-type="serialNumber"]').textContent = '000';
      // Генерируем уникальный идентификатор для новой строки
      const newId = generateUniqueId();
      // Устанавливаем уникальный идентификатор в качестве id для скопированной строки
      copiedRow.setAttribute('id', newId);
      // Вставляем скопированную строку после текущей
      parentRow.after(copiedRow);
      // Пересчитываем номера строк
      recalculateRowNumbers();
    }
  });

  // Обработчик кнопок редактирования
  tableBody.addEventListener('click', function (event) {
    if (event.target.classList.contains('table__btn--edit')) {
      // Получаем родительскую строку кнопки редактирования
      const parentRow = event.target.closest('tr');
      // Получаем данные из ячеек текущей строки
      const serialNumber = parentRow.querySelector('[data-type="serialNumber"]').textContent;
      const deviceName = parentRow.querySelector('[data-type="deviceNameText"]').textContent;
      const dateMaking = parentRow.querySelector('[data-type="dateMaking"]').textContent;
      const operatingTime = parentRow.querySelector('[data-type="operatingTime"]').textContent;
      const operatingConditions = parentRow.querySelector('[data-type="operatingConditions"]').textContent;
      const defectDesc = parentRow.querySelector('[data-type="defectDesc"]').textContent;

      // Заполняем поля формы данными из текущей строки
      const formEdit = document.getElementById('form-edit-device');
      formEdit.querySelector('.form__block-input').value = serialNumber;
      formEdit.querySelector('.form__block-select').value = deviceName;
      formEdit.querySelector('.form__block-input-date').value = dateMaking;
      formEdit.querySelector('.form__block-input[name="equipment"]').value = operatingTime;
      formEdit.querySelector('.form__block-input[name="malfunction"]').value = operatingConditions;
      formEdit.querySelector('.form__block-textarea').value = defectDesc;

      // Открытие модального окна редактирования
      const modalEdit = document.getElementById('modal-edit');
      const modalBackground = document.querySelector('.modal-background');
      modalEdit.classList.add('is-active');
      modalBackground.classList.add('is-active');
      // Устанавливаем атрибут данных для формы редактирования
      formEdit.setAttribute('data-row-id', parentRow.getAttribute('id'));
    }
  });

  // Обработчик события отправки формы редактирования
  document.getElementById('form-edit-device').addEventListener('submit', function (event) {
    event.preventDefault();

    // Получаем ID строки, которая редактируется
    const rowId = this.getAttribute('data-row-id');
    const parentRow = document.getElementById(rowId);

    // // Получаем новые значения из формы редактирования
    // const newSerialNumber = this.querySelector('.form__block-input').value;

    // // Проверяем уникальность нового серийного номера
    // if (!isUniqueSerialNumber(newSerialNumber)) {
    //   alert('Данный серийный номер уже используется');
    //   return;
    // }

    // Проверяем существование элементов в форме редактирования
    const serialNumberInput = this.querySelector('.form__block-input');
    const deviceNameSelect = this.querySelector('.form__block-select');
    const dateMakingInput = this.querySelector('.form__block-input-date');
    const operatingTimeSelect = this.querySelector('.form__block-input[name="equipment"]');
    const operatingConditionsRadio = this.querySelector('.form__block-input[name="malfunction"]');
    const defectDescTextarea = this.querySelector('.form__block-textarea');

    // Проверяем, найдены ли все необходимые элементы
    if (serialNumberInput && deviceNameSelect && dateMakingInput && operatingTimeSelect && operatingConditionsRadio && defectDescTextarea) {
      // Обновляем данные в конкретной строке таблицы
      parentRow.querySelector('[data-type="serialNumber"]').textContent = serialNumberInput.value;
      parentRow.querySelector('[data-type="deviceNameText"]').textContent = deviceNameSelect.value;
      parentRow.querySelector('[data-type="dateMaking"]').textContent = dateMakingInput.value;
      parentRow.querySelector('[data-type="operatingTime"]').textContent = operatingTimeSelect.value;
      parentRow.querySelector('[data-type="operatingConditions"]').textContent = operatingConditionsRadio.value;
      parentRow.querySelector('[data-type="defectDesc"]').textContent = defectDescTextarea.value;

      // Закрываем модальное окно
      const modalEdit = document.getElementById('modal-edit');
      modalEdit.classList.remove('is-active');
      const modalBackground = document.querySelector('.modal-background');
      modalBackground.classList.remove('is-active');
      document.querySelector('body').classList.remove('is-modal-open');

    } else {
      console.error('Some elements are missing in the edit form.');
    }
  });

  // Функция для генерации уникального идентификатора
  function generateUniqueId() {
    // Генерация случайного числа и его преобразование в строку
    const randomNumber = Math.random().toString(36).substr(2, 9);
    // Генерация временной метки и ее преобразование в строку
    const timestamp = Date.now().toString(36);
    // Возвращаем конкатенацию случайного числа и временной метки
    return 'row_' + randomNumber + timestamp;
  }

  // Функция для пересчета номеров строк
  function recalculateRowNumbers() {
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      row.querySelector('.col').textContent = index + 1;
    });
  }
});

// валидация для кнопки отправки
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('online-form-comp');
  const submitButton = form.querySelector('.form__footer-btn');
  const tableContainer = document.getElementById('table-product-data').querySelector('tbody');

  // Функция для проверки, заполнены ли все поля формы
  function isFormValid() {
    // Проверяем заполненность всех обязательных полей
    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    for (const input of requiredInputs) {
      if (!input.value.trim()) {
        return false; // Если хотя бы одно обязательное поле не заполнено, вернем false
      }
    }

    // Проверяем, есть ли хотя бы один элемент в таблице с классом table__row-added
    const tableRows = form.querySelectorAll('#table-product-data .table__row-added');
    return tableRows.length > 0;
  }

  // Функция для обновления доступности кнопки отправки формы
  function updateSubmitButton() {
    submitButton.disabled = !isFormValid();
  }

  // Создаем экземпляр MutationObserver
  const observer = new MutationObserver(function (mutationsList, observer) {
    // Вызываем функцию обновления кнопки при каждом изменении внутри таблицы
    updateSubmitButton();
  });

  // Начинаем наблюдение за изменениями в таблице
  observer.observe(tableContainer, { childList: true, subtree: true });

  // Вызываем функцию обновления кнопки при изменении значений в полях формы
  form.addEventListener('input', updateSubmitButton);

  // Инициализируем состояние кнопки при загрузке страницы
  updateSubmitButton();
});

// попап успешной отправки
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('online-form-comp');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    setTimeout(function() {
      const successModal = document.getElementById('modal-success');
      const overlay = document.querySelector('.modal-background');

      successModal.classList.add('is-active');
      overlay.classList.add('is-active');
    }, 2000); // задержка в 2 секунды
  });
});

