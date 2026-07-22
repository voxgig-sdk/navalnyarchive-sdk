-- Typed models for the Navalnyarchive SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class DailyPost
---@field author? string
---@field content? string
---@field date? string
---@field id? string
---@field source? string
---@field title? string
---@field url? string

---@class DailyPostListMatch
---@field author? string
---@field content? string
---@field date? string
---@field id? string
---@field source? string
---@field title? string
---@field url? string

local M = {}

return M
