function skillsMember() {
    let member = document.querySelectorAll('.member');

    for (let i = 0; i < member.length; i++) {
        member[i].addEventListener('click', function () {
            member[i].classList.toggle('member--active');
        });
    }
}