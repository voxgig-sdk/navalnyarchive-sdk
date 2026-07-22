<?php
declare(strict_types=1);

// Navalnyarchive SDK utility: result_headers

class NavalnyarchiveResultHeaders
{
    public static function call(NavalnyarchiveContext $ctx): ?NavalnyarchiveResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
