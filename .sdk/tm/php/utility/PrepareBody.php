<?php
declare(strict_types=1);

// Navalnyarchive SDK utility: prepare_body

class NavalnyarchivePrepareBody
{
    public static function call(NavalnyarchiveContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
