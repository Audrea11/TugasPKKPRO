<?php
$konek=mysqli_connect("localhost","root","","siardo_audrea");

if (mysqli_connect_errno()){
    echo "Koneksi database gagal : "
    mysqli_connect_errno();
}

?>