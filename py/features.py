# Navalnyarchive SDK feature factory

from feature.base_feature import NavalnyarchiveBaseFeature
from feature.test_feature import NavalnyarchiveTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NavalnyarchiveBaseFeature(),
        "test": lambda: NavalnyarchiveTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
