<?php
declare(strict_types=1);

// Navalnyarchive SDK base feature

class NavalnyarchiveBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NavalnyarchiveContext $ctx, array $options): void {}
    public function PostConstruct(NavalnyarchiveContext $ctx): void {}
    public function PostConstructEntity(NavalnyarchiveContext $ctx): void {}
    public function SetData(NavalnyarchiveContext $ctx): void {}
    public function GetData(NavalnyarchiveContext $ctx): void {}
    public function GetMatch(NavalnyarchiveContext $ctx): void {}
    public function SetMatch(NavalnyarchiveContext $ctx): void {}
    public function PrePoint(NavalnyarchiveContext $ctx): void {}
    public function PreSpec(NavalnyarchiveContext $ctx): void {}
    public function PreRequest(NavalnyarchiveContext $ctx): void {}
    public function PreResponse(NavalnyarchiveContext $ctx): void {}
    public function PreResult(NavalnyarchiveContext $ctx): void {}
    public function PreDone(NavalnyarchiveContext $ctx): void {}
    public function PreUnexpected(NavalnyarchiveContext $ctx): void {}
}
