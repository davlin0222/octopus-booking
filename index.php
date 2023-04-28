<?php

require("src/rooms.php");
$roomNames = getRoomNames();
echo json_encode($roomNames);
