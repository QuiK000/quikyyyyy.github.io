const btn = document.querySelector('.main-btn');

const modalWindow = () => {
  swal({
    title: 'наверстать упущенное',
    icon: 'success',
    text: "Ты наверстала упущенное",
    value: true,
    visible: true,
    className: "",
    closeModal: true,
    button: {
      text: 'Закрыть'
    },
  });
};

btn.addEventListener('click', modalWindow);