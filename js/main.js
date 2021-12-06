<script>
        let navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "0";
        }
         function hideMenu(){
            navLinks.style.right = "-200px";
        }
    </script>

<i class="fas fa-times" onclick="hideMenu()"></i> <i class="fas fa-bars" onclick="showMenu()"></i>
