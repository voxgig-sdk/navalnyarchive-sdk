<?php
declare(strict_types=1);

// Navalnyarchive SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NavalnyarchiveFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NavalnyarchiveBaseFeature();
            case "test":
                return new NavalnyarchiveTestFeature();
            default:
                return new NavalnyarchiveBaseFeature();
        }
    }
}
