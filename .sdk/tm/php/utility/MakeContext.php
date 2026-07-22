<?php
declare(strict_types=1);

// Navalnyarchive SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NavalnyarchiveMakeContext
{
    public static function call(array $ctxmap, ?NavalnyarchiveContext $basectx): NavalnyarchiveContext
    {
        return new NavalnyarchiveContext($ctxmap, $basectx);
    }
}
