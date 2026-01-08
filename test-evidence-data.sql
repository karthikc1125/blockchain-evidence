-- Test Evidence Data for Preview System
-- Run this in Supabase SQL Editor after the main database setup

-- Insert test cases
INSERT INTO cases (id, title, description, priority, created_by, status) VALUES
(1, 'Sample Investigation Case', 'Test case for evidence preview system', 'high', '0x29bb7718d5c6da6e787deae8fd6bb3459e8539f2', 'open'),
(2, 'Document Analysis Case', 'PDF document evidence case', 'medium', '0x29bb7718d5c6da6e787deae8fd6bb3459e8539f2', 'open'),
(3, 'Video Evidence Case', 'Video surveillance evidence', 'high', '0x29bb7718d5c6da6e787deae8fd6bb3459e8539f2', 'open');

-- Insert test evidence
INSERT INTO evidence (id, case_id, title, description, type, file_data, file_name, file_size, hash, submitted_by, status) VALUES
(1, '1', 'Sample Image Evidence', 'Test image for preview system', 'image/jpeg', 
 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2aWRlbmNlIEltYWdlPC90ZXh0Pjwvc3ZnPg==',
 'evidence_image.jpg', 2621440, 'a1b2c3d4e5f6789012345678901234567890abcdef', '0x29bb7718d5c6da6e787deae8fd6bb3459e8539f2', 'verified'),

(2, '2', 'Sample PDF Document', 'Test PDF document for preview', 'application/pdf',
 'data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsOgCjIgMCBvYmoKPDwKL0xlbmd0aCAzIDAgUgo+PgpzdHJlYW0KQNP',
 'evidence_document.pdf', 1258291, 'b2c3d4e5f6789012345678901234567890abcdef1', '0x29bb7718d5c6da6e787deae8fd6bb3459e8539f2', 'pending'),

(3, '3', 'Sample Video Evidence', 'Test video for preview system', 'video/mp4',
 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC',
 'evidence_video.mp4', 16777216, 'c3d4e5f6789012345678901234567890abcdef12', '0x29bb7718d5c6da6e787deae8fd6bb3459e8539f2', 'verified');

-- Reset sequence to continue from 4
SELECT setval('evidence_id_seq', 3, true);
SELECT setval('cases_id_seq', 3, true);