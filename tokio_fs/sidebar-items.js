initSidebarItems({"fn":[["blocking_err",""],["blocking_io",""],["create_dir","Creates a new, empty directory at the provided path"],["create_dir_all","Recursively create a directory and all of its parent components if they are missing."],["hard_link","Creates a new hard link on the filesystem."],["metadata","Queries the file system metadata for a path."],["read","Creates a future which will open a file for reading and read the entire contents into a buffer and return said buffer."],["read_dir","Returns a stream over the entries within a directory."],["read_link","Reads a symbolic link, returning the file that the link points to."],["remove_dir","Removes an existing, empty directory."],["remove_file","Removes a file from the filesystem."],["rename","Rename a file or directory to a new name, replacing the original file if `to` already exists."],["set_permissions","Changes the permissions found on a file or a directory."],["stderr","Constructs a new handle to the standard error of the current process."],["stdin","Constructs a new handle to the standard input of the current process."],["stdout","Constructs a new handle to the standard output of the current process."],["symlink_metadata","Queries the file system metadata for a path."],["would_block",""],["write","Creates a future that will open a file for writing and write the entire contents of `contents` to it."]],"mod":[["create_dir",""],["create_dir_all",""],["file","Types for working with [`File`]."],["hard_link",""],["metadata",""],["os","OS-specific functionality."],["read",""],["read_dir",""],["read_link",""],["remove_dir",""],["remove_file",""],["rename",""],["set_permissions",""],["stderr",""],["stdin",""],["stdout",""],["symlink_metadata",""],["write",""]],"struct":[["CreateDirAllFuture","Future returned by `create_dir_all`."],["CreateDirFuture","Future returned by `create_dir`."],["DirEntry","Entries returned by the [`ReadDir`] stream."],["HardLinkFuture","Future returned by `hard_link`."],["MetadataFuture","Future returned by `metadata`."],["OpenOptions","Options and flags which can be used to configure how a file is opened."],["ReadDir","Stream of the entries in a directory."],["ReadDirFuture","Future returned by `read_dir`."],["ReadFile","A future used to open a file and read its entire contents into a buffer."],["ReadLinkFuture","Future returned by `read_link`."],["RemoveDirFuture","Future returned by `remove_dir`."],["RemoveFileFuture","Future returned by `remove_file`."],["RenameFuture","Future returned by `rename`."],["SetPermissionsFuture","Future returned by `set_permissions`."],["Stderr","A handle to the standard error stream of a process."],["Stdin","A handle to the standard input stream of a process."],["Stdout","A handle to the standard output stream of a process."],["SymlinkMetadataFuture","Future returned by `symlink_metadata`."],["WriteFile","A future used to open a file for writing and write the entire contents of some data to it."]]});