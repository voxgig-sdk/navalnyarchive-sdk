package voxgignavalnyarchivesdk

import (
	"github.com/voxgig-sdk/navalnyarchive-sdk/go/core"
	"github.com/voxgig-sdk/navalnyarchive-sdk/go/entity"
	"github.com/voxgig-sdk/navalnyarchive-sdk/go/feature"
	_ "github.com/voxgig-sdk/navalnyarchive-sdk/go/utility"
)

// Type aliases preserve external API.
type NavalnyarchiveSDK = core.NavalnyarchiveSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NavalnyarchiveEntity = core.NavalnyarchiveEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NavalnyarchiveError = core.NavalnyarchiveError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDailyPostEntityFunc = func(client *core.NavalnyarchiveSDK, entopts map[string]any) core.NavalnyarchiveEntity {
		return entity.NewDailyPostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNavalnyarchiveSDK = core.NewNavalnyarchiveSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewNavalnyarchiveSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *NavalnyarchiveSDK  { return NewNavalnyarchiveSDK(nil) }
func Test() *NavalnyarchiveSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
