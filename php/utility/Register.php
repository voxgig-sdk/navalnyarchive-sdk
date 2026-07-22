<?php
declare(strict_types=1);

// Navalnyarchive SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NavalnyarchiveUtility::setRegistrar(function (NavalnyarchiveUtility $u): void {
    $u->clean = [NavalnyarchiveClean::class, 'call'];
    $u->done = [NavalnyarchiveDone::class, 'call'];
    $u->make_error = [NavalnyarchiveMakeError::class, 'call'];
    $u->feature_add = [NavalnyarchiveFeatureAdd::class, 'call'];
    $u->feature_hook = [NavalnyarchiveFeatureHook::class, 'call'];
    $u->feature_init = [NavalnyarchiveFeatureInit::class, 'call'];
    $u->fetcher = [NavalnyarchiveFetcher::class, 'call'];
    $u->make_fetch_def = [NavalnyarchiveMakeFetchDef::class, 'call'];
    $u->make_context = [NavalnyarchiveMakeContext::class, 'call'];
    $u->make_options = [NavalnyarchiveMakeOptions::class, 'call'];
    $u->make_request = [NavalnyarchiveMakeRequest::class, 'call'];
    $u->make_response = [NavalnyarchiveMakeResponse::class, 'call'];
    $u->make_result = [NavalnyarchiveMakeResult::class, 'call'];
    $u->make_point = [NavalnyarchiveMakePoint::class, 'call'];
    $u->make_spec = [NavalnyarchiveMakeSpec::class, 'call'];
    $u->make_url = [NavalnyarchiveMakeUrl::class, 'call'];
    $u->param = [NavalnyarchiveParam::class, 'call'];
    $u->prepare_auth = [NavalnyarchivePrepareAuth::class, 'call'];
    $u->prepare_body = [NavalnyarchivePrepareBody::class, 'call'];
    $u->prepare_headers = [NavalnyarchivePrepareHeaders::class, 'call'];
    $u->prepare_method = [NavalnyarchivePrepareMethod::class, 'call'];
    $u->prepare_params = [NavalnyarchivePrepareParams::class, 'call'];
    $u->prepare_path = [NavalnyarchivePreparePath::class, 'call'];
    $u->prepare_query = [NavalnyarchivePrepareQuery::class, 'call'];
    $u->result_basic = [NavalnyarchiveResultBasic::class, 'call'];
    $u->result_body = [NavalnyarchiveResultBody::class, 'call'];
    $u->result_headers = [NavalnyarchiveResultHeaders::class, 'call'];
    $u->transform_request = [NavalnyarchiveTransformRequest::class, 'call'];
    $u->transform_response = [NavalnyarchiveTransformResponse::class, 'call'];
});
