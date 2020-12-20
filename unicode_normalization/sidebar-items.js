initSidebarItems({"constant":[["UNICODE_VERSION",""]],"enum":[["IsNormalized","The QuickCheck algorithm can quickly determine if a text is or isn't normalized without any allocations in many cases, but it has to be able to return `Maybe` when a full decomposition and recomposition is necessary."]],"fn":[["is_nfc","Authoritatively check if a string is in NFC."],["is_nfc_quick","Quickly check if a string is in NFC, potentially returning `IsNormalized::Maybe` if further checks are necessary.  In this case a check like `s.chars().nfc().eq(s.chars())` should suffice."],["is_nfc_stream_safe","Authoritatively check if a string is Stream-Safe NFC."],["is_nfc_stream_safe_quick","Quickly check if a string is Stream-Safe NFC."],["is_nfd","Authoritatively check if a string is in NFD."],["is_nfd_quick","Quickly check if a string is in NFD."],["is_nfd_stream_safe","Authoritatively check if a string is Stream-Safe NFD."],["is_nfd_stream_safe_quick","Quickly check if a string is Stream-Safe NFD."],["is_nfkc","Authoritatively check if a string is in NFKC."],["is_nfkc_quick","Quickly check if a string is in NFKC."],["is_nfkd","Authoritatively check if a string is in NFKD."],["is_nfkd_quick","Quickly check if a string is in NFKD."]],"mod":[["char","Methods for composing and decomposing characters."],["decompose",""],["lookups","Lookups of unicode properties using minimal perfect hashing."],["no_std_prelude",""],["normalize","Functions for computing canonical and compatible decompositions for Unicode characters."],["perfect_hash","Support for lookups based on minimal perfect hashing."],["quick_check",""],["recompose",""],["stream_safe",""],["tables",""]],"struct":[["Decompositions","External iterator for a string decomposition's characters."],["Recompositions","External iterator for a string recomposition's characters."],["StreamSafe","UAX15-D4: This iterator keeps track of how many non-starters there have been since the last starter in NFKD and will emit a Combining Grapheme Joiner (U+034F) if the count exceeds 30."]],"trait":[["UnicodeNormalization","Methods for iterating over strings while applying Unicode normalizations as described in Unicode Standard Annex #15."]]});