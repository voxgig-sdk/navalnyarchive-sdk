<?php
declare(strict_types=1);

// Navalnyarchive SDK utility: result_body

class NavalnyarchiveResultBody
{
    public static function call(NavalnyarchiveContext $ctx): ?NavalnyarchiveResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
