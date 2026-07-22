# ProjectName SDK exists test

import pytest
from navalnyarchive_sdk import NavalnyarchiveSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NavalnyarchiveSDK.test(None, None)
        assert testsdk is not None
