
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Toggling between adding & removing 'active' class
            this.classList.toggle('active');

            var panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            }
            else {
                panel.style.display = 'block';
            };
        });
    };

    document.querySelector('.password').onsubmit = () => {
        // if they get the password right
        if (document.querySelector('.password_field').value == 'Tattes') {
            
            // get rid of locked screen
            document.querySelector('.locked_sec').style.display = 'none'

            // depending on which page they're on, show them the content on it
            if (document.querySelector('title') == 'Onboarding • Jonathan Pierre') {
                document.querySelector('#onboarding_page').style.display = 'block';
            }
            if (document.querySelector('title') == 'Testing Feature • Jonathan Pierre') {
                document.querySelector('#testing_page').style.display = 'block';
            }
            }
        else {
            alert('Please try again.');
            document.querySelector('.password_field').value = '';
        }

        return(false)
    }

    // document.querySelector('form').onsubmit = function(){

    //     const rec = document.querySelector('#lib_field').value;
    //     alert(`Thanks for the rec! I'll give ${rec} a read!`)
    //     return(false)
    // };
})