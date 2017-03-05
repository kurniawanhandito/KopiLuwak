<?php

class Helper {

    static function notNull($var) {
        return isset($var) && $var != '';
    }

    static function notNullIndex($var, $index) {
        return isset($var[$index]) && $var[$index] != '';
    }

}

?>
