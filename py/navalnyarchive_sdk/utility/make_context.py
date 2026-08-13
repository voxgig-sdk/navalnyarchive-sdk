# Navalnyarchive SDK utility: make_context

from navalnyarchive_sdk.core.context import NavalnyarchiveContext


def make_context_util(ctxmap, basectx):
    return NavalnyarchiveContext(ctxmap, basectx)
