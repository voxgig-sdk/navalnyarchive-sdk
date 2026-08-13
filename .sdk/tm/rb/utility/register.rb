# Navalnyarchive SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NavalnyarchiveUtility.registrar = ->(u) {
  u.clean = NavalnyarchiveUtilities::Clean
  u.done = NavalnyarchiveUtilities::Done
  u.make_error = NavalnyarchiveUtilities::MakeError
  u.feature_add = NavalnyarchiveUtilities::FeatureAdd
  u.feature_hook = NavalnyarchiveUtilities::FeatureHook
  u.feature_init = NavalnyarchiveUtilities::FeatureInit
  u.fetcher = NavalnyarchiveUtilities::Fetcher
  u.make_fetch_def = NavalnyarchiveUtilities::MakeFetchDef
  u.make_context = NavalnyarchiveUtilities::MakeContext
  u.make_options = NavalnyarchiveUtilities::MakeOptions
  u.make_request = NavalnyarchiveUtilities::MakeRequest
  u.make_response = NavalnyarchiveUtilities::MakeResponse
  u.make_result = NavalnyarchiveUtilities::MakeResult
  u.make_point = NavalnyarchiveUtilities::MakePoint
  u.make_spec = NavalnyarchiveUtilities::MakeSpec
  u.make_url = NavalnyarchiveUtilities::MakeUrl
  u.param = NavalnyarchiveUtilities::Param
  u.prepare_auth = NavalnyarchiveUtilities::PrepareAuth
  u.prepare_body = NavalnyarchiveUtilities::PrepareBody
  u.prepare_headers = NavalnyarchiveUtilities::PrepareHeaders
  u.prepare_method = NavalnyarchiveUtilities::PrepareMethod
  u.prepare_params = NavalnyarchiveUtilities::PrepareParams
  u.prepare_path = NavalnyarchiveUtilities::PreparePath
  u.prepare_query = NavalnyarchiveUtilities::PrepareQuery
  u.graphql_body = NavalnyarchiveUtilities::GraphqlBody
  u.graphql_errors = NavalnyarchiveUtilities::GraphqlErrors
  u.result_basic = NavalnyarchiveUtilities::ResultBasic
  u.result_body = NavalnyarchiveUtilities::ResultBody
  u.result_headers = NavalnyarchiveUtilities::ResultHeaders
  u.transform_request = NavalnyarchiveUtilities::TransformRequest
  u.transform_response = NavalnyarchiveUtilities::TransformResponse
}
