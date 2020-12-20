initSidebarItems({"enum":[["AttributeValue","The value of an attribute in a `DebuggingInformationEntry`."],["UnitType","This enum specifies the type of the unit and any type specific data carried in the header (e.g. the type signature/type offset of a type unit)."]],"fn":[["allow_section_offset",""],["length_u16_value",""],["length_u32_value",""],["length_u8_value",""],["length_uleb128_value",""],["parse_attribute",""],["parse_debug_abbrev_offset","Parse the `debug_abbrev_offset` in the compilation unit header."],["parse_debug_info_offset","Parse the `debug_info_offset` in the arange header."],["parse_dwo_id","Parse a dwo_id from a header"],["parse_type_offset","Parse a type unit header's type offset."],["parse_type_signature","Parse a type unit header's unique type signature. Callers should handle unique-ness checking."],["parse_unit_header","Parse a unit header."],["parse_unit_type","Parse the unit type from the unit header."]],"struct":[["Attribute","An attribute in a `DebuggingInformationEntry`, consisting of a name and associated value."],["AttrsIter","An iterator over a particular entry's attributes."],["DebugInfo","The `DebugInfo` struct represents the DWARF debugging information found in the `.debug_info` section."],["DebugInfoUnitHeadersIter","An iterator over the units of a .debug_info section."],["DebugTypes","The `DebugTypes` struct represents the DWARF type information found in the `.debug_types` section."],["DebugTypesUnitHeadersIter","An iterator over the type-units of this `.debug_types` section."],["DebuggingInformationEntry","A Debugging Information Entry (DIE)."],["EntriesCursor","A cursor into the Debugging Information Entries tree for a compilation unit."],["EntriesRaw","A raw reader of the data that defines the Debugging Information Entries."],["EntriesTree","The state information for a tree view of the Debugging Information Entries."],["EntriesTreeIter","An iterator that allows traversal of the children of an `EntriesTreeNode`."],["EntriesTreeNode","A node in the Debugging Information Entry tree."],["UnitHeader","The common fields for the headers of compilation units and type units."],["UnitOffset","An offset into the current compilation or type unit."]]});