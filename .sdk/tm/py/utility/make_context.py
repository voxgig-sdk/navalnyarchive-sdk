# Navalnyarchive SDK utility: make_context

from core.context import NavalnyarchiveContext


def make_context_util(ctxmap, basectx):
    return NavalnyarchiveContext(ctxmap, basectx)
