package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDailyPostEntityFunc func(client *NavalnyarchiveSDK, entopts map[string]any) NavalnyarchiveEntity

